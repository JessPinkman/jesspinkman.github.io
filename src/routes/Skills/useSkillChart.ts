import { useEffect, useRef } from "react";
import BaseChart from "../../charts/BaseChart";
import SkillChart from "../../charts/SkillChart";
import type { Skill } from "../../types/types";

const useSkillChart = (skillList: Skill[]) => {
  const nodeRef = useRef<HTMLCanvasElement>(null!);
  const chartRef = useRef<BaseChart>(null!);

  useEffect(() => {
    chartRef.current = new SkillChart(nodeRef.current.getContext("2d")!);
    return () => chartRef.current.destroy();
  }, []);

  useEffect(() => {
    chartRef.current.data.datasets = [
      {
        backgroundColor: "#52e08b",
        data: skillList.map((skill) => skill.level),
        barThickness: 10,
      },
    ];
    chartRef.current.data.labels = skillList.map((skill) => skill.title);
    chartRef.current.update();
  }, [skillList]);

  return { nodeRef };
};

export default useSkillChart;
