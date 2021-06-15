import { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";

import { useCurrentUser } from '../hooks/index';

export default function Map({ location })  {

  var lat = 47.185414;
  var long = -66.314062;

  if (location) {
    lat = location[0];
    long = location[1];
  }

  const [user] = useCurrentUser();

  if (!user) {
lat = user.latitude;

long = user.longitude;
  }

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "300px",
    latitude: lat,
    longitude: long,
    zoom: 5
  });
return <ReactMapGL
  mapStyle="mapbox://styles/mapbox/streets-v11"
  mapboxApiAccessToken="pk.eyJ1IjoiYnJlbmRhbi1sb2NhbCIsImEiOiJja3A0OGNzN2UxeXhtMndxcTh0cmx0N3R4In0.ey4Lfo0kJ9jW1RUWVgW57g"
  {...viewport}
  onViewportChange={(nextViewport) => setViewport(nextViewport)}
  
  >

    <div >
      <Marker
      latitude={lat}
      longitude={long}
      offsetLeft={-30}
      offsetTop={-50}>
        <img height={60} src="mapPin-orange.svg"/>
      </Marker>
    </div>
</ReactMapGL>
}