import HistoryRoute from "./History/HistoryRoute";
import Home from "./Home/HomeRoute";
import SkillRoute from "./Skills/SkillRoute";

interface LinkT {
  label: string;
  to: string;
  Render: () => JSX.Element;
  inMenu: boolean;
}

const links: LinkT[] = [
  {
    label: "Home",
    to: "/",
    Render: Home,
    inMenu: false,
  },
  {
    label: "skills",
    to: "/skills",
    Render: SkillRoute,
    inMenu: true,
  },
  {
    label: "history",
    to: "/history",
    Render: HistoryRoute,
    inMenu: true,
  },
];

export default links;
