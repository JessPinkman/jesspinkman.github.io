import { ChartOptions } from "chart.js";
import { useEffect, useRef } from "react";
import BaseChart from "../../charts/BaseChart";
import { Level } from "../../types/enums";
import type { Skill } from "../../types/types";

const useSkillChart = (skillList: Skill[]) => {
  const nodeRef = useRef<HTMLCanvasElement>(null!);
  const chartRef = useRef<BaseChart>(null!);

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
        backgroundColor: "#004420aa",
        data: skillList.map((skill) => skill.level),
      },
    ];
    chartRef.current.data.labels = skillList.map((skill) => skill.title);
    chartRef.current.update();
  }, [skillList]);

  return { nodeRef };
};

const chartOptions: ChartOptions = {
  indexAxis: "y",
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    tooltip: {
      enabled: false,
    },
    title: {
      display: false,
    },
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      min: 0,
      max: Level.END - 1,
      ticks: {
        stepSize: 1,
        callback: (level) =>
          Object.entries(Level).find(([, val]) => val === level)?.[0] ?? "",
      },
    },
    y: {},
  },
};

export default useSkillChart;
