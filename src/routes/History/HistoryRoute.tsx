import { useState } from "react";
import MapTile from "./MapTile";
import type { History } from "../../types/types";
import history from "../../data/history/history";
import HistoryCard from "./HistoryCard";

const HistoryRoute = () => {
  const [selected, setSelected] = useState<History | undefined>(history[0]);

  const handleClick = (selection: History) => {
    setSelected((prev) => (prev === selection ? undefined : selection));
  };

  return (
    <div className="container grid grid-cols-2 gap-4 auto-rows-[80vh]">
      <MapTile selected={selected} />
      <div className="route__history_list card__list">
        {history.map((h) => (
          <HistoryCard
            key={+h.start}
            history={h}
            active={h === selected}
            handleClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryRoute;
