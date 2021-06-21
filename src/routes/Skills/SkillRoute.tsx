import { useEffect, useRef } from "react";
import BaseChart from "../../charts/BaseChart";
import skills from "../../skills/skills";
import { SkillType } from "../../types/enums";

const SkillRoute = () => {
  const nodeRef = useRef<HTMLCanvasElement>(null!);
  const chartRef = useRef<BaseChart>(null!);

  useEffect(() => {
    chartRef.current = new BaseChart(nodeRef.current.getContext("2d")!, {
      type: "bar",
      data: {
        datasets: [
          {
            label: SkillType.PHP,
            backgroundColor: "blue",
            data: skills.map((skill) =>
              skill.type === SkillType.PHP ? skill.level : 0
            ),
          },
          {
            label: SkillType.JS,
            backgroundColor: "green",
            data: skills.map((skill) =>
              skill.type === SkillType.JS ? skill.level : 0
            ),
          },
        ],
        labels: skills.map((skill) => skill.title),
      },
      options: {
        indexAxis: "y",
      },
    });
    return () => chartRef.current.destroy();
  }, []);

  return <canvas ref={nodeRef} className="chart__skills" />;
};

export default SkillRoute;
