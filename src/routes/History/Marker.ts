import Feature from "ol/Feature";
import { useEffect, useRef } from "react";
import Point from "ol/geom/Point";
import { fromLonLat } from "ol/proj";
import Style from "ol/style/Style";
import type { Vector } from "ol/source";
import Icon from "ol/style/Icon";
import View from "ol/View";

interface Props {
  coord: [number, number];
  vector: Vector;
  view: View;
  isFocus: boolean;
}

const Marker = ({ coord, vector, view, isFocus }: Props) => {
  const { current: feature } = useRef(
    new Feature({
      geometry: new Point(fromLonLat(coord)),
    })
  );

  const { current: style } = useRef(
    new Style({
      image: new Icon({
        src: "/img/marker.svg",
        scale: 0.1,
        anchor: [0.5, 1],
      }),
    })
  );

  useEffect(() => {
    feature.setStyle(style);
    vector.addFeature(feature);
    return () => vector.removeFeature(feature);
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (isFocus) {
      view.animate(
        {
          zoom: 5,
        },
        () =>
          view.animate(
            {
              center: fromLonLat(coord),
            },
            () =>
              view.animate({
                zoom: 9,
              })
          )
      );
    }
    // eslint-disable-next-line
  }, [isFocus]);

  return null;
};

export default Marker;
