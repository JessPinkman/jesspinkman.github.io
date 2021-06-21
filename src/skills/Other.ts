import { Level, SkillType } from "../types/enums";
import type { Skill } from "../types/types";

const skills: Skill[] = [
  {
    title: "HTML",
    type: SkillType.OTHER,
    level: Level.EXPERT,
  },
  {
    title: "CSS",
    type: SkillType.OTHER,
    level: Level.PROFICIENT,
  },
  {
    title: "Sass",
    type: SkillType.OTHER,
    level: Level.PROFICIENT,
  },
  {
    title: "MYSQL",
    type: SkillType.OTHER,
    level: Level.PROFICIENT,
  },
  {
    title: "Bootstrap",
    type: SkillType.OTHER,
    level: Level.PROFICIENT,
  },
  {
    title: "SEO",
    type: SkillType.OTHER,
    level: Level.PROFICIENT,
  },
  {
    title: "Linux",
    type: SkillType.OTHER,
    level: Level.PROFICIENT,
  },
  {
    title: "WSL",
    type: SkillType.OTHER,
    level: Level.PROFICIENT,
  },

  {
    title: "Apache",
    type: SkillType.OTHER,
    level: Level.PROFICIENT,
  },
  {
    title: "Digital Ocean",
    type: SkillType.OTHER,
    level: Level.PROFICIENT,
  },
  {
    title: "Google Cloud Console",
    type: SkillType.OTHER,
    level: Level.NOVICE,
  },
];

export default skills;
