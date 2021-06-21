import { SkillType, Level } from "./enums";

export interface Location {
  lat: number;
  lng: number;
  name: string;
  country: string;
  city: string;
}

export interface Skill {
  title: string;
  level: Level;
  type: SkillType;
}
