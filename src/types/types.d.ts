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
  at: Entity;
  location: Location;
  type: HistoryType;
}

export interface Entity {
  name: string;
  contact?: ContactPerson;
}

export interface ContactPerson {
  name: string;
  email: string;
}
interface Description {
  main: string;
  lines?: string[];
  link?: string;
  special?: string;
}

export interface Project {
  title: string;
  at: Entity;
  description: Description;
  link: string;
  img: string;
  stack: Skill[];
}
