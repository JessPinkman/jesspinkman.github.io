import type { Project } from "../../types/types";
import { osalad } from "../history/entities";

export const osaladProject: Project = {
  title: "Osalad.tw",
  at: osalad,
  img: "/img/projects/osalad.png",
  link: "https://osalad.tw",
  stack: [],
  description: {
    main: "Create Osalad Website",
    lines: [
      "Wordpress",
      "Custom theme",
      "Custom plugin",
      "Custom ordering system",
      "Custom ERP System",
      "Custom style system",
      "Custom UI/UX",
    ],
  },
};

const projects: Project[] = [osaladProject];
export default projects;
