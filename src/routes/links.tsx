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
    Render: () => <div>Home</div>,
    inMenu: false,
  },
  {
    label: "skills",
    to: "/skills",
    Render: SkillRoute,
    inMenu: true,
  },
  {
    label: "experience",
    to: "/experience",
    Render: () => <div>experience</div>,
    inMenu: true,
  },
  {
    label: "education",
    to: "/education",
    Render: () => <div>education</div>,
    inMenu: true,
  },
];

export default links;
