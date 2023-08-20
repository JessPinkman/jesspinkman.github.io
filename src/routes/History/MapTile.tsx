import useMapHook from "./useMapHook";
import Marker from "./Marker";
import { useEffect } from "react";
import { fromLonLat } from "ol/proj";
import history from "../../data/history/history";
import locations from "../../data/history/locations";
import { History } from "../../types/types";

const MapTile: React.FC<{ selected?: History }> = ({ selected }) => {
  const { hookRef, vector, view } = useMapHook();

  useEffect(() => {
    if (!selected) {
      view.current.animate({ ...initialViewSettings });
    }
  }, [selected, view]);

  return (
    <div ref={hookRef} className="overflow-hidden shadow-md rounded-md">
      {locations.map((loc) => (
        <Marker
          key={loc.city}
          coord={loc.coord}
          vector={vector.current}
          view={view.current}
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
