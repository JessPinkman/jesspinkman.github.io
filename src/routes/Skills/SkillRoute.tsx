import { useState } from "react";

import { Level, SkillType } from "../../types/enums";
import useSkillChart from "./useSkillChart";
import useSkillList from "./useSkillList";

const SkillRoute = () => {
  const [selectedType, setSelectedType] = useState<SkillType>(SkillType.JS);

  const skillList = useSkillList(selectedType);

  const { nodeRef } = useSkillChart(skillList);

  const labels = Object.values(SkillType);

  return (
    <div className="skill__chart page">
      <div className="skill__chart_filter">
        {labels.map((label) => (
          <button
            className={`skill__chart_filter_button ${
              selectedType === label ? "selected" : null
            }`}
            key={label}
            onClick={() => setSelectedType(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="skill__chart_grid">
        <div className="card__list">
          {Object.entries(Level)
            .sort((a, b) => parseInt(b[1] as any) - parseInt(a[1] as any))
            .map((levelEntry) => {
              const skills = skillList.filter(
                (skill) => skill.level === levelEntry[1]
              );
              return skills.length > 0 ? (
                <div className="card" key={levelEntry[0]}>
                  <div className="card__label">{levelEntry[0]}</div>
                  <div className="card__text">
                    {skills.map((skill) => (
                      <div key={skill.title}>{skill.title}</div>
                    ))}
                  </div>
                </div>
              ) : null;
            })}
          <h3 className="ta--center mt:2">... and getting better every day</h3>
        </div>
        <div className="skill__chart_grid_chart">
          <canvas ref={nodeRef} width={300} height={300} />
        </div>
      </div>
    </div>
  );
};

export default SkillRoute;
