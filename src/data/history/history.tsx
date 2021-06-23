import type { History } from "../../types/types";
import { adda, kapsea, volvo } from "./entities";

const history: History[] = [
  // {
  //   title: "IUP Management",
  //   at: jeanMonnet,
  //   start: new Date("2000/09/01"),
  //   end: new Date("2004/06/01"),
  // },
  {
    title: "Call center coordinator",
    at: volvo,
    start: new Date("2006/12"),
    end: new Date("2008/03"),
    description: {},
  },
  {
    title: "Call center Manager",
    at: volvo,
    start: new Date("2008/04"),
    end: new Date("2011/08"),
    description: {},
  },
  {
    title: "Pricing Manager",
    at: volvo,
    start: new Date("2011/09"),
    end: new Date("2012/12"),
    description: {},
  },
  {
    title: "Product Manager",
    at: volvo,
    start: new Date("2013/01"),
    end: new Date("2014/12"),
    description: {},
  },
  {
    title: "Automotive Business Developer",
    at: adda,
    start: new Date("2015/10"),
    end: new Date("2016/08"),
    description: {},
  },
  {
    title: "Marketing Manager",
    at: kapsea,
    start: new Date("2017/04"),
    end: new Date("2018/12"),
    description: {},
  },
  {
    title: "Web developer",
    at: kapsea,
    start: new Date("2019/04"),
    description: {},
  },
];

export default history.sort((a, b) => +b.start - +a.start);
