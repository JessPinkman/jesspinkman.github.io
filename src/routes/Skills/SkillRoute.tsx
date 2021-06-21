import { useState } from "react";
import { SkillType } from "../../types/enums";
import useSkillChart from "./useSkillChart";

const SkillRoute = () => {
  const [selectedType, setSelectedType] = useState<SkillType>(SkillType.JS);
  const { nodeRef } = useSkillChart(selectedType);

  const labels = Object.values(SkillType);

  return (
    <div className="chart_container">
      <div className="chart_container__skill_list">
        {labels.map((label) => (
          <button
            className={`chart_container__skill_list_button ${
              selectedType === label ? "selected" : null
            }`}
            key={label}
            onClick={() => setSelectedType(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <canvas ref={nodeRef} className="chart__skills" />
    </div>
  );
};

export default SkillRoute;
