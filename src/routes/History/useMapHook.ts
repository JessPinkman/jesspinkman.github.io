import { useEffect, useRef } from "react";
import Map from "ol/Map";
import { Vector } from "ol/source";
import VectorLayer from "ol/layer/Vector";
import View from "ol/View";
import { fromLonLat } from "ol/proj";
import TileLayer from "ol/layer/Tile";
import OSM from "ol/source/OSM";
import { defaults } from "ol/control";

const useMapHook = () => {
  const hookRef = useRef<HTMLDivElement>(null!);
  const mapRef = useRef<Map>(null!);

  const vector = useRef(
    new Vector({
      features: [],
    })
  );

  const vectorLayer = useRef(
    new VectorLayer({
      source: vector.current,
    })
  );

  const view = useRef(
    new View({
      center: fromLonLat([60, 35]),
      zoom: 1,
      minZoom: 3,
      maxZoom: 20,
    })
  );

  useEffect(() => {
    mapRef.current = new Map({
      view: view.current,
      layers: [new TileLayer({ source: new OSM() }), vectorLayer.current],
      target: hookRef.current,
      controls: defaults({ attribution: false }),
    });
  }, []);

  return { hookRef, mapRef, vector, view };
};

export default useMapHook;

// mapRef.current.on("singleclick", (e) => {
//   const features = mapRef.current.getFeaturesAtPixel(e.pixel);
// });

// mapRef.current.addEventListener("moveend", (e) => {
//   const [lng, lat] = toLonLat(view.getCenter()!);
//   return true;
// });

// mapRef.current.on("singleclick", (e) => {
//   const features = mapRef.current.getFeaturesAtPixel(e.pixel);
//   if (features.length > 0) {
//     e.stopPropagation();
//   }
// });
