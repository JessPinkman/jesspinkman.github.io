import useMapHook from "./useMapHook";
import { WithHistorySelection } from "./HistoryRoute";
import Marker from "./Marker";
import entities from "../../data/history/entities";
import { useEffect } from "react";
import { fromLonLat } from "ol/proj";

const MapTile = ({ selected, handleClick }: WithHistorySelection) => {
  const { hookRef, vector, view } = useMapHook();

  useEffect(() => {
    if (!selected) {
      view.animate({
        center,
        zoom: 3,
      });
    }
  }, [selected]);

  return (
    <div ref={hookRef} className="route__history_map">
      {entities.map((e) => (
        <Marker
          coord={e.location.coord}
          vector={vector}
          view={view}
          isFocus={e === selected?.at}
        />
      ))}
    </div>
  );
};

export const center = fromLonLat([60, 35]);

export default MapTile;
