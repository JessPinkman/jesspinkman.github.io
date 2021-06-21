import { Level, SkillType } from "../types/enums";
import type { Skill } from "../types/types";

const PHPSkills: Skill[] = [
  {
    title: "Core PHP (up to 8.0)",
    type: SkillType.PHP,
    level: Level.EXPERT,
  },
  {
    title: "Wordpress",
    type: SkillType.PHP,
    level: Level.EXPERT,
  },
  {
    title: "OOP (class, traits, interfaces, ...)",
    type: SkillType.PHP,
    level: Level.PROFICIENT,
  },
  {
    title: "Composer",
    type: SkillType.PHP,
    level: Level.PROFICIENT,
  },
  {
    title: "Laravel",
    type: SkillType.PHP,
    level: Level.INTERMEDIATE,
  },
  {
    title: "Symfony",
    type: SkillType.PHP,
    level: Level.INTERMEDIATE,
  },
];

export default PHPSkills;
