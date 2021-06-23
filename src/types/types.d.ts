import { SkillType, Level, HistoryType, Country } from "./enums";

export interface Location {
  coord: [number, number];
  country: Country;
  city: string;
}

export interface Skill {
  title: string;
  level: Level;
  type: SkillType;
}

export interface History {
  title: string;
  start: Date;
  end?: Date;
  description: Description;
  special?: string;
  at: Entity;
}

export interface Entity {
  name: string;
  location: Location;
  type: HistoryType;
  contact?: ContactPerson;
}

export interface ContactPerson {
  name: string;
  email: string;
}
interface Description {
  main: string;
  lines: string[];
  link?: string;
}
