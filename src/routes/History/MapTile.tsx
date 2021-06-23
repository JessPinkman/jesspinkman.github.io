import useMapHook from "./useMapHook";
import { WithHistorySelection } from "./HistoryRoute";
import Marker from "./Marker";
import entities from "../../data/history/entities";
import { useEffect } from "react";
import { fromLonLat } from "ol/proj";
import history from "../../data/history/history";

const MapTile = ({ selected, handleClick }: WithHistorySelection) => {
  const { hookRef, vector, view } = useMapHook();

  useEffect(() => {
    if (!selected) {
      view.animate({ ...initialViewSettings });
    }
    // eslint-disable-next-line
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

export const initialViewSettings = {
  center: fromLonLat(history[0].at.location.coord),
  zoom: 8,
};

export default MapTile;
