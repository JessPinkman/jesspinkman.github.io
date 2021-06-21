import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  Tooltip,
  Title,
  Legend,
  ChartConfiguration,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  LineController,
  LineElement,
  Tooltip,
  Title,
  Legend
);

class BaseChart extends Chart {
  constructor(ctx: CanvasRenderingContext2D, config: ChartConfiguration) {
    super(ctx, {
      ...config,
      options: {
        ...config.options,
      },
    });
  }
}

export default BaseChart;
