import { useState } from "react";
import MapTile from "./MapTile";
import type { History } from "../../types/types";
import history from "../../data/history/history";
import HistoryCard from "./HistoryCard";

const HistoryRoute = () => {
  const [selected, setSelected] = useState<History | null>(history[0]);

  const handleClick = (selection: History) => {
    setSelected((prev) => (prev === selection ? null : selection));
  };

  return (
    <div className="route__history">
      <MapTile selected={selected} handleClick={handleClick} />
      <div className="route__history_list card__list">
        {history.map((h) => (
          <HistoryCard
            key={h.title}
            history={h}
            active={h === selected}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export interface WithHistorySelection {
  selected: History | null;
  handleClick: (selection: History) => void;
}

export default HistoryRoute;
