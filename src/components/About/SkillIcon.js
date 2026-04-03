import React from "react";

function SkillIcon({ icon, level }) {
  return (
    <div className="skill-card">
      <div className="tech-icons">{icon}</div>
      <div className="skill-level-bar">
        {[1, 2, 3, 4, 5].map((n) => (
          <div
            key={n}
            className={`skill-level-segment${n <= level ? " filled" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default SkillIcon;
