import type { Skill } from "../../types/types";
import PHPSkills from "./PHP";
import JSSkills from "./JS";
import OtherSkills from "./Other";
import SpokenLanguages from "./Language";
import BusinessSkills from "./Business";

const skills: Skill[] = [
  ...JSSkills,
  ...PHPSkills,
  ...OtherSkills,
  ...SpokenLanguages,
  ...BusinessSkills,
];

export default skills;
