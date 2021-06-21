import { ChartOptions } from "chart.js";
import { useEffect, useMemo, useRef } from "react";
import BaseChart from "../../charts/BaseChart";
import skills from "../../skills/skills";
import { SkillType } from "../../types/enums";

const useSkillChart = (selected: SkillType) => {
  const nodeRef = useRef<HTMLCanvasElement>(null!);
  const chartRef = useRef<BaseChart>(null!);

  const skillList = useMemo(
    () => skills.filter((skill) => skill.type === selected),
    [selected]
  );

  useEffect(() => {
    chartRef.current = new BaseChart(nodeRef.current.getContext("2d")!, {
      type: "bar",
      data: {
        datasets: [],
      },
      options: { ...chartOptions },
    });
    return () => chartRef.current.destroy();
  }, []);

  useEffect(() => {
    chartRef.current.data.datasets = [
      {
        label: selected,
        backgroundColor: "#004420aa",
        data: skillList.map((skill) => skill.level),
      },
    ];
    chartRef.current.data.labels = skillList.map((skill) => skill.title);
    chartRef.current.update();
  }, [skillList, selected]);

  return { nodeRef };
};

const chartOptions: ChartOptions = {
  indexAxis: "y",
  plugins: {
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
};

export default useSkillChart;
