import { useEffect, useRef } from "react";
import BaseChart from "../../charts/BaseChart";
import SkillChart from "../../charts/SkillChart";
import type { Skill } from "../../types/types";

const useSkillChart = (skillList: Skill[]) => {
  const nodeRef = useRef<HTMLCanvasElement>();
  const chartRef = useRef<BaseChart>();

  useEffect(() => {
    if (nodeRef.current) {
      const chart = new SkillChart(
        nodeRef.current.getContext("2d") as CanvasRenderingContext2D
      );
      chartRef.current = chart;
      return () => chart.destroy();
    }
  }, []);

  useEffect(() => {
    if (!chartRef.current) {
      return;
    }
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

  return nodeRef;
};

export default useSkillChart;
