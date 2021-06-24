import { Country } from "../../types/enums";
import { Location } from "../../types/types";

const lyon: Location = {
  city: "Lyon",
  country: Country.FR,
  coord: [4.834277, 45.76342],
};

const saintEtienne: Location = {
  city: "Saint-Etienne",
  country: Country.FR,
  coord: [4.39, 45.43389],
};

const kaohsiung: Location = {
  city: "Kaohsiung",
  country: Country.TW,
  coord: [120.26667, 22.633333],
};

const taichung: Location = {
  city: "Taichung",
  country: Country.TW,
  coord: [120.6839, 24.1469],
};

export { lyon, saintEtienne, kaohsiung, taichung };

const locations: Location[] = [lyon, saintEtienne, kaohsiung, taichung];
export default locations;
