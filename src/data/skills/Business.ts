import { Level, SkillType } from "../../types/enums";
import type { Skill } from "../../types/types";

const skills: Skill[] = [
  {
    title: "Marketing Mix",
    type: SkillType.MARKETING,
    level: Level.EXPERT,
  },
  {
    title: "Brand positioning",
    type: SkillType.MARKETING,
    level: Level.MASTER,
  },
  {
    title: "Market Research",
    type: SkillType.MARKETING,
    level: Level.PROFICIENT,
  },
  {
    title: "Market Analysis",
    type: SkillType.MARKETING,
    level: Level.EXPERT,
  },
];

export default skills;
