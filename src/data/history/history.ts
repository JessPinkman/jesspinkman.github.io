import { HistoryType } from "../../types/enums";
import type { History } from "../../types/types";
import { adda, kapsea, osalad, volvo, jeanMonnet } from "./entities";
import { kaohsiung, lyon, saintEtienne, taichung } from "./locations";

const history: History[] = [
  {
    title: "IUP Management",
    type: HistoryType.EDU,
    location: saintEtienne,
    at: jeanMonnet,
    start: new Date("2000/09/01"),
    end: new Date("2004/06/01"),
    description: {
      main: "Bachelor in Business Administration",
      lines: ["Last year at Wilfried Laurier University, Waterloo, Canada"],
    },
  },
  {
    title: "Call center coordinator",
    type: HistoryType.JOB,
    at: volvo,
    location: lyon,
    start: new Date("2006/12"),
    end: new Date("2008/04"),
    description: {
      main: "Use language skills to coordinate assistance for VOLVO Group's customers in Europe when breakdowns occurs.",
    },
  },
  {
    title: "Call center Manager",
    at: volvo,
    location: lyon,
    type: HistoryType.JOB,
    start: new Date("2008/04"),
    end: new Date("2011/08"),
    description: {
      main: "Management of 10 to 15 team members",
      lines: [
        "Recruiting staff",
        "Training plans and evaluations",
        "Goal settings and follow-up with corrective action plans",
      ],
      special:
        "Cost Reduction action plan and creation of a Staffing Planning Tool (use of advanced statistics).",
    },
  },
  {
    title: "Pricing Manager",
    at: volvo,
    location: lyon,
    type: HistoryType.JOB,
    start: new Date("2011/09"),
    end: new Date("2012/12"),
    description: {
      main: "Establish worldwide price list for truck spare parts",
      lines: [
        "Use of different pricing methodology (cost+ pricing, product structure pricing, market pricing",
        "Strong collaboration with local sales representatives across the world",
      ],
      special: "Creation of pricing processes and tools for the department",
    },
  },
  {
    title: "Product Manager",
    at: volvo,
    location: lyon,
    type: HistoryType.JOB,
    start: new Date("2013/01"),
    end: new Date("2014/12"),
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
    start: new Date("2015/10"),
    end: new Date("2016/08"),
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
    start: new Date("2017/04"),
    end: new Date("2018/12"),
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
    at: osalad,
    start: new Date("2020/01"),
    location: taichung,
    type: HistoryType.SIDE,
    description: {
      main: "Design, Develop and Maintain Web App.",
      lines: [
        "During out of office hours (web app made for a family member)",
        "React, PHP, WordPress (custom theme / plugin)",
      ],
      link: "https://osalad.tw/salads",
      special:
        "Fully Interactive and custom made ordering system, (incl. databases, RESTful API, and UI/UX)",
    },
  },
  {
    title: "Web Developer",
    at: kapsea,
    location: taichung,
    type: HistoryType.JOB,
    start: new Date("2019/04"),
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
