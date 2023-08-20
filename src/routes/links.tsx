import HistoryRoute from "./History/HistoryRoute";
import Home from "./Home/HomeRoute";
import SkillRoute from "./Skills/SkillRoute";

interface LinkT {
  label: string;
  to: string;
  Render: () => JSX.Element;
  inMenu: boolean;
}

const skillLink = {
  label: "skills",
  to: "/skills",
  Render: SkillRoute,
  inMenu: true,
};

const homeLink = {
  label: "Home",
  to: "/",
  Render: Home,
  inMenu: false,
};

const backgroundLink = {
  label: "background",
  to: "/background",
  Render: HistoryRoute,
  inMenu: true,
};

const links: LinkT[] = [skillLink, backgroundLink];

export { homeLink, skillLink, backgroundLink };
export default links;
