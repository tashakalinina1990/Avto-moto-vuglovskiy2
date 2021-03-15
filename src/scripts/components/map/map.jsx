import React from "react";
import GoogleMapReact from "google-map-react";

import pin from "../../../images/point.svg";

const MapProperty = {
  KEY: `AIzaSyDdxiZ8JD-Awc3VOchAbkcA54-XHZJYkGY`,
  CENTER: {
    lat: 59.96774703739982,
    lng: 30.321653317794672
  },
  ZOOM: 14.5,
};

const renderMarkers = (map, maps) => {
  const marker = new maps.Marker({
    position: {
      lat: 59.968509482971,
      lng: 30.316286409402256
    },
    map,
    title: `Санкт-Петербург, набережная реки Карповки, дом 5`,
    icon: pin,
  });

  return marker;
};

const Map = () => {
  return (
    <GoogleMapReact
      bootstrapURLKeys={{key: MapProperty.KEY}}
      defaultCenter={MapProperty.CENTER}
      defaultZoom={MapProperty.ZOOM}
      onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
      yesIWantToUseGoogleMapApiInternals={true}
    />
  );
};

Map.propTypes = {};

export default Map;
