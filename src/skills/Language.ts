import { Level, SkillType } from "../types/enums";
import type { Skill } from "../types/types";

const skills: Skill[] = [
  {
    title: "French",
    type: SkillType.LANGUAGE,
    level: Level.MASTER,
  },
  {
    title: "English",
    type: SkillType.LANGUAGE,
    level: Level.EXPERT,
  },
  {
    title: "Portuguese",
    type: SkillType.LANGUAGE,
    level: Level.PROFICIENT,
  },
  {
    title: "Spanish",
    type: SkillType.LANGUAGE,
    level: Level.PROFICIENT,
  },
  {
    title: "Chinese",
    type: SkillType.LANGUAGE,
    level: Level.INTERMEDIATE,
  },
];
export default skills;
