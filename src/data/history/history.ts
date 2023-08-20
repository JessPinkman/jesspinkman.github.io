import { HistoryType } from "../../types/enums";
import type { History } from "../../types/types";
import { adda, kapsea, volvo } from "./entities";
import { kaohsiung, lyon, taichung } from "./locations";

const history: History[] = [
  {
    title: "Product Manager",
    at: volvo,
    location: lyon,
    type: HistoryType.JOB,
    start: new Date("2012/01/01"),
    end: new Date("2014/12/01"),
    description: {
      main: "Global Product Manager for spare parts",
      lines: [
        "Portfolio: brakes, suspension, electricity & electronics.",
        "Marketing strategies: including market research, customer segmentation, Product plan, 4P strategies, advertising tools, business follow-up, etc",
        "Strong relationship with sales representatives, product development, purchasing, suppliers and management team",
      ],
      special: "Battery Marketing Strategy",
    },
  },
  {
    title: "Automotive Business Developer",
    at: adda,
    location: kaohsiung,
    type: HistoryType.JOB,
    start: new Date("2015/09/01"),
    end: new Date("2016/08/01"),
    description: {
      main: "Responsible for the Automotive Business Development",
      lines: [
        "Customer prospection and relationship",
        "Strategy Making",
        "Project follow up",
        "Manage Automotive Team (incl. key account manager and project manager)",
      ],
      special: "Successfully developed new automotive market",
    },
  },
  {
    title: "Marketing Manager",
    at: kapsea,
    location: kaohsiung,
    type: HistoryType.JOB,
    start: new Date("2017/04/01"),
    end: new Date("2018/12/01"),
    description: {
      main: "Responsible for Marketing Strategy and Operational Marketing",
      lines: [
        "Definition, Implementation and evaluation of marketing mix strategy",
        "Project Management of international trade shows",
      ],
      special: "Successfully redefined company’s brand positioning",
    },
  },
  {
    title: "Web Developer",
    at: kapsea,
    location: taichung,
    type: HistoryType.JOB,
    start: new Date("2019/04/01"),
    description: {
      main: "Design, Develop and Maintain Web Apps",
      lines: [
        "Design, develop and maintain backend",
        "PHP, custom WP theme and plugin",
        "Custom Elementor blocks to be reused by designers",
        "Front End with React, sass, typescript, webpack, npm, ...",
      ],
      link: "https://kapsea.com/en/product/evo-d/#evo-d-simulation",
      special:
        "Fully Interactive Solar Simulation Application (incl. calculation algorithm)",
    },
  },
];

export default history.sort((a, b) => +b.start - +a.start);
