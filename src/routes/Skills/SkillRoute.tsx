import { useMemo, useState } from "react";
import skills from "../../skills/skills";
import { Level, SkillType } from "../../types/enums";
import useSkillChart from "./useSkillChart";

const SkillRoute = () => {
  const [selectedType, setSelectedType] = useState<SkillType>(SkillType.JS);

  const skillList = useMemo(
    () =>
      skills
        .filter((skill) => skill.type === selectedType)
        .sort((a, b) => b.level - a.level),
    [selectedType]
  );

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
        <div className="skill__chart_grid_chart">
          <canvas ref={nodeRef} width={400} height={400} />
        </div>
        <div className="skill__chart_grid_list">
          {Object.entries(Level)
            .sort((a, b) => parseInt(b[1] as any) - parseInt(a[1] as any))
            .map((levelEntry) => {
              const skills = skillList.filter(
                (skill) => skill.level === levelEntry[1]
              );
              return skills.length > 0 ? (
                <div
                  className="skill__chart_grid_list_item"
                  key={levelEntry[0]}
                >
                  <div className="skill__chart_grid_list_item_label">
                    {levelEntry[0]}
                  </div>
                  <div className="skill__chart_grid_list_item_list">
                    {skills.map((skill) => (
                      <div key={skill.title}>{skill.title}</div>
                    ))}
                  </div>
                </div>
              ) : null;
            })}
        </div>
      </div>
      <h1 className="ta--center mt:2">...And learning more every day</h1>
    </div>
  );
};

export default SkillRoute;
