# Zadanie pre vývojový tím — Inteligentný športový dres

**Verzia:** v0.4 — draft na revíziu
**Stav:** pred zahájením prác

---

## 1. Popis systému

### Čo zariadenie robí
Systém sleduje **výkonnostné metriky a pohyb hráčov** a určuje ich **pozíciu na ľade** počas tréningu/zápasu. Každý hráč má v drese nositeľnú jednotku, ktorá meria pohyb a počíta metriky priamo na zariadení. Pozíciu na ľade a čas na ľade dopĺňa UWB komunikácia s jednou kotvou.

### Z čoho sa skladá
- **Nositeľné jednotky (tagy)** — v drese každého hráča, **na ľade**. Merajú pohyb (IMU), počítajú metriky on-device, komunikujú cez UWB.
- **Jedna kotva (anchor)** — prenosná, **na striedačke**. Dvojanténna (AoA), určuje 2D pozíciu jednotiek a blízkosť pre čas na ľade.
- **Gateway** — zbiera dáta a posiela ich na cloud. Integračné rozhranie na cloud/aplikáciu definujeme.

---

## 2. Metriky

Sleduje sa **8 metrík**. Šesť sa počíta on-device z IMU bez potreby kotvy; čas na ľade a poloha vyžadujú kotvu.

| # | Metrika | Zdroj | Kde sa počíta | Potreba kotvy |
|---|---------|-------|---------------|---------------|
| 1 | Zrýchlenie | BMI270 (±16 g) + ADXL372 (±200 g) | on-device | nie |
| 2 | Rýchlosť (priem./max) | IMU (+ poloha) | on-device / z trajektórie | čiastočne* |
| 3 | Prejdená vzdialenosť | IMU model (+ poloha) | on-device / z trajektórie | čiastočne* |
| 4 | Otáčanie | BMI270 gyro | on-device | nie |
| 5 | Orientácia v priestore | BMI270 (6-os. fúzia) | on-device | nie |
| 6 | Nárazy a pády | ADXL372 + BMI270 | on-device | nie |
| 7 | Čas na ľade | UWB blízkosť ku kotve + IMU | firmware / gateway | áno (kotva pri striedačke) |
| 8 | Poloha na ihrisku | UWB: DS-TWR + PDoA | kotva / gateway | áno |

\* Rýchlosť a vzdialenosť sú z IMU len odhad. Presná hodnota vychádza z UWB trajektórie (derivácia polohy) — preto je poloha jadrom deliverable, nielen bonusom. IMU medzi UWB fixmi dopočítava pohyb a vyhladzuje (EKF fúzia).

---

## 3. Prenos dát do cloudu *(návrh rozhrania — finalizuje Vetva B)*

Dvojúrovňový tok dát:

| Vrstva | Obsah | Frekvencia | Trasa |
|--------|-------|-----------|-------|
| Prevádzkové metriky | už vypočítané hodnoty (8 metrík) | ~1 Hz / na event | tag → gateway → cloud |
| Pozícia | trajektória hráča | cieľ 10 Hz/hráča (reálne 5–20 Hz podľa škálovania) | tag/kotva → gateway → cloud |
| Diagnostické raw dáta | surová senzorika pre test protokol | high-rate | logované **on-device**, nejdú do cloudu v reálnom čase |

**Protokol (návrh):**
- **Tag → gateway:** BLE (nRF5340) alebo UWB data payload — rozhodnúť v M1/M2.
- **Gateway → cloud:** **MQTT (JSON)** cez Wi-Fi/Ethernet; alternatíva WebSocket. Definovať schému správ (pozícia + metriky + ID + timestamp + stav batérie).

> Pri 50 hráčoch a TDMA degraduje update rate **1/N** na pridaný tag — cieľová frekvencia pozície na hráča priamo určuje limit škálovania.

---

## 4. Hardvér — chipy a fázovanie

### Cieľové chipy
- **Produkčná PCB jednotky:** nRF5340 (MCU + BLE) + DW3110 (UWB) + BMI270 (IMU) + ADXL372 (high-g) + nPM1300 (PMIC) + LiPo.
- **Kotva:** DW3000/PDoA, dvojanténny.

### Aký hardvér v ktorej fáze
DK slúžia na vývoj firmvéru a UWB do M2. **Hotové custom PCB nasadzujeme od M3** (po bring-upe), v M4–M5 v sérii na škálovanie a prototyp.

| Fáza / Míľnik | Vývojový kit / HW | Účel |
|---|---|---|
| M0–M1 | Nordic **Thingy:53** (nRF5340, BMI270 onboard) | IMU metriky na benchi, dátová rúra |
| M1–M2 | **nRF5340-DK + DWM3000EVB** shield | paralelný UWB ranging, AoA bring-up |
| M2 | Qorvo **DWM3001C** | prototypové a škálovacie tagy |
| **M3 →** | **Custom PCB** (nRF5340 + DW3110 + BMI270 + ADXL372 + nPM1300 + LiPo) | nositeľná jednotka, bring-up, integrácia |
| M4–M5 | Custom PCB (séria) + DWM3001C na škálovanie | 50 jednotiek, funkčný prototyp |

| Referencia | Catapult Vector X7 teardown (DWM1000, u-blox GNSS, nRF52832, Taoglas antény) |

---

## 5. Škálovanie (kľúčové rozhodnutie)

- Single-anchor **AoA** je vhodný pre nižší počet hráčov.
- Pre **50+ jednotiek** je pravdepodobné riešenie **TDoA** (pasívne blink tagy, anchory počúvajú paralelne).
- TDMA ranging degraduje **1/N** na pridaný tag.
- **Plán:** prototyp na **TWR** (rýchle rozbehnutie pozície), produkt na **TDoA** (kvôli škále). Rozhodnutie padá vo Vetve C.

---

## 6. Vývojové vetvy a konkrétne úlohy na teraz

### Vetva A — Firmvér nositeľnej jednotky
**Cieľ:** 6 metrík z IMU on-device, správa napájania, bench na Thingy:53.

**Pozrieť / spraviť teraz:**
- Rozbehať toolchain a bring-up **Nordic Thingy:53** (nRF Connect SDK / Zephyr).
- **BMI270:** konfigurácia ODR a rozsahov, FIFO, overiť stabilné čítanie pri reálnom pohybe.
- **ADXL372 (high-g):** nastaviť prah pre nárazy/pády, overiť rozsah ±200 g a saturáciu.
- Implementovať algoritmy pre 6 IMU metrík (zrýchlenie, rýchlosť, vzdialenosť, otáčanie, orientácia, nárazy/pády).
- **nPM1300:** profilovanie spotreby, odhad výdrže na LiPo pri cieľovom dátovom toku.

### Vetva B — Anchor + gateway + cloud integrácia
**Cieľ:** prenosná kotva na striedačke, gateway, rozhranie na cloud.

**Pozrieť / spraviť teraz:**
- Bring-up **DW3000/PDoA dvojanténny** — overiť, že PDoA dáva použiteľný a opakovateľný uhol.
- Zvoliť platformu **gateway** (nRF + host, alebo Linux SBC) a prenos (BLE / Wi-Fi / Ethernet).
- Navrhnúť **dátové rozhranie na cloud** (sekcia 3): schéma správ, protokol, frekvencia.
- **Synchronizácia času** medzi tagmi a kotvou — kritické pre TDoA, posúdiť hneď.

### Vetva C — UWB lokalizácia
**Cieľ:** 2D pozícia z jednej kotvy, fallback multilaterácia, škálovanie na 50 jednotiek.

**Pozrieť / spraviť teraz:**
- **DS-TWR:** zmerať presnosť vzdialenosti, kalibrácia antenna delay.
- **PDoA:** zmerať presnosť uhla, kalibrácia dvojantény, vplyv orientácie tagu.
- Spojiť vzdialenosť + uhol do **2D pozície**, zmerať reálnu chybu polohy na ploche (cieľ 30–50 cm v hale).
- **EKF fúzia** UWB + IMU pre plynulú trajektóriu cez výpadky UWB.
- **Škálovanie:** porovnať **TDoA** vs **TDMA** pri 50 tagoch (update rate, 1/N); rozhodnúť cestu pre prototyp.
- **Procurement:** vybrať konkrétne UWB moduly (DWM3001C pre tagy), zistiť dodacie lehoty — **objednať tento týždeň**.

---

## 7. Míľniky

> M0 a podmienky M4/M5 sú dané. Rozpis M1–M3 je **návrh** — na potvrdenie tímom.

| Míľnik | Obsah | Kľúčový výstup |
|--------|-------|----------------|
| **M0** | Finalizácia architektúry, obstaranie HW | Štartovací hardvér, rozbehaný bench |
| **M1** *(návrh)* | Firmvér + 6 IMU metrík na benchi | Funkčné metriky na Thingy:53 |
| **M2** *(návrh)* | UWB ranging: single-anchor AoA | Pozícia jedného tagu (vzdialenosť + uhol) |
| **M3** *(návrh)* | Custom PCB + 3D puzdro, integrácia | Nositeľná jednotka — bring-up |
| **M4** | Škálovanie: paralelná prevádzka, viac tagov | Demonštrácia škálovania |
| **M5** | Funkčný prototyp, validácia 50 jednotiek | Prototyp + report škálovania a limitov, **28. 11. 2026** |

---

## 8. Riziká

- **UWB moduly — dlhé dodacie lehoty.** Obstaranie urgentné, blokuje Vetvu C. → riešiť hneď.
- **Personálne obsadenie** vetiev A/B/C — kto, alokácia, paralelne vs. sériovo.
- **TDoA vs. AoA cesta** k 50 jednotkám — ovplyvní celú Vetvu C.

---

## 9. Otázky na revíziu tímu

1. Sedí rozpis M1–M3 a navrhované rozdelenie ľudí na vetvy?
2. TDoA vs. single-anchor AoA + multilaterácia — čo je reálnejšia cesta k 50 jednotkám do M5?
3. Tag → gateway: BLE alebo UWB payload?
4. Cieľová frekvencia pozície na hráča (určuje limit škálovania)?
5. Aké sú dodacie lehoty na konkrétne UWB moduly — čo objednať tento týždeň?
