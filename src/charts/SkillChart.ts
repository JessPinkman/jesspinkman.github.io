import { Level } from "../types/enums";
import BaseChart from "./BaseChart";

export default class SkillChart extends BaseChart {
  constructor(ctx: CanvasRenderingContext2D) {
    super(ctx, {
      type: "bar",
      data: {
        datasets: [],
      },
      options: {
        indexAxis: "y",
        responsive: true,
        maintainAspectRatio: false,
        layout: {
          padding: 16,
        },
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
            grid: {
              display: false,
            },
            min: 0,
            max: Level.END - 1,
            ticks: {
              display: false,
              stepSize: 1,
              callback: (level) =>
                Object.entries(Level).find(([, val]) => val === level)?.[0] ??
                "",
            },
          },
          y: {},
        },
      },
    });
  }
}
