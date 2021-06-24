import useMapHook from "./useMapHook";
import { WithHistorySelection } from "./HistoryRoute";
import Marker from "./Marker";
import { useEffect } from "react";
import { fromLonLat } from "ol/proj";
import history from "../../data/history/history";
import locations from "../../data/history/locations";

const MapTile = ({ selected }: WithHistorySelection) => {
  const { hookRef, vector, view } = useMapHook();

  useEffect(() => {
    if (!selected) {
      view.animate({ ...initialViewSettings });
    }
    // eslint-disable-next-line
  }, [selected]);

  return (
    <div ref={hookRef} className="route__history_map">
      {locations.map((loc) => (
        <Marker
          key={loc.city}
          coord={loc.coord}
          vector={vector}
          view={view}
          isFocus={loc === selected?.location}
        />
      ))}
    </div>
  );
};

export const initialViewSettings = {
  center: fromLonLat(history[0].location.coord),
  zoom: 8,
};

export default MapTile;
