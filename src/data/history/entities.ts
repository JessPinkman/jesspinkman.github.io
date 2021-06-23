import { Country, HistoryType } from "../../types/enums";
import type { Entity } from "../../types/types";

const jeanMonnet: Entity = {
  name: "Université Jean Monnet",
  type: HistoryType.EDU,
  location: {
    city: "Saint-Etienne",
    country: Country.FR,
    coord: [4.3932022, 45.4259935],
  },
};

const volvo: Entity = {
  name: "Volvo GROUP",
  type: HistoryType.JOB,
  location: {
    city: "Lyon",
    country: Country.FR,
    coord: [4.9042682, 45.7026832],
  },
};

const adda: Entity = {
  name: "ADDA Corporation",
  type: HistoryType.JOB,
  location: {
    city: "Kaohsiung",
    country: Country.TW,
    coord: [120.3023814, 22.6111589],
  },
};

const kapsea: Entity = {
  name: "Kapsea",
  type: HistoryType.JOB,
  location: {
    city: "Chorges",
    country: Country.FR,
    coord: [120.6983457, 24.0820011],
  },
};

const entities: Entity[] = [adda, volvo, kapsea];
export { adda, jeanMonnet, kapsea, volvo };
export default entities;
