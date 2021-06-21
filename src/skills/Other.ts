import { Level, SkillType } from "../types/enums";
import type { Skill } from "../types/types";

const skills: Skill[] = [
  {
    title: "HTML",
    type: SkillType.HTML,
    level: Level.EXPERT,
  },
  {
    title: "CSS",
    type: SkillType.CSS,
    level: Level.PROFICIENT,
  },
  {
    title: "Sass",
    type: SkillType.CSS,
    level: Level.PROFICIENT,
  },
  {
    title: "MYSQL",
    type: SkillType.SQL,
    level: Level.PROFICIENT,
  },
  {
    title: "Bootstrap",
    type: SkillType.CSS,
    level: Level.PROFICIENT,
  },
  {
    title: "SEO",
    type: SkillType.HTML,
    level: Level.PROFICIENT,
  },
];

export default skills;
