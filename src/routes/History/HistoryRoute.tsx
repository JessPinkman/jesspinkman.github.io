import { useState } from "react";
import MapTile from "./MapTile";
import type { History } from "../../types/types";
import history from "../../data/history/history";

const HistoryRoute = () => {
  const [selected, setSelected] = useState<History | null>(null);

  const handleClick = (selection: History | null) => {
    setSelected((prev) => (prev === selection ? null : selection));
  };

  return (
    <div className="route__history">
      <MapTile selected={selected} handleClick={handleClick} />
      <div className="route__history_list card__list">
        {history
          .sort((a, b) => +(b.end ?? new Date()) - +(a.end ?? new Date()))
          .map((h) => (
            <div
              className={`card ${selected === h ? "active" : null}`}
              key={h.title}
              onClick={() => handleClick(h)}
            >
              <div className="card__label">{h.title}</div>
              <div className="card__text">
                <span>
                  {`${h.start.getMonth()} / ${h.start.getFullYear()}`}
                </span>
                {h.end && (
                  <span>{` - ${h.end.getMonth()} / ${h.end.getFullYear()}`}</span>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export interface WithHistorySelection {
  selected: History | null;
  handleClick: (selection: History | null) => void;
}

export default HistoryRoute;
