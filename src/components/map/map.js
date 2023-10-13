import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  LoadScript,
  StandaloneSearchBox,
} from "@react-google-maps/api";
import React, { useState } from "react";
import styles from "./../../styles/map.module.css";

const MapPage = () => {
  const [map, setMap] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [center, setCenter] = useState({
    lat: -22.972506678390094,
    lng: -43.39620335206514,
  });

  const onMapLoad = (map) => {
    setMap(map);
  };

  const onLoad = (ref) => {
    setSearchBox(ref);
  };

  const onPlacesChanged = () => {
    if (searchBox) {
      const places = searchBox.getPlaces();
      if (places.length > 0) {
        const place = places[0];
        const location = {
          lat: place.geometry.location.lat(),
          lng: place.geometry.location.lng(),
        };
        setMarkers([...markers, location]);
        setCenter(location);
      }
    }
  };

  return (
    <div className={styles.centeredContent}>
      <h1>Mapa que busca CEP e localiza marcando com o pin</h1>

      <div className={styles.map}>
        <LoadScript
          googleMapsApiKey={"AIzaSyCO-vDdf7TyuszVt16uV9xY53uCcBygA5k"}
          libraries={["places"]}
        >
          <GoogleMap
            onLoad={onMapLoad}
            mapContainerStyle={{ width: "100%", height: "90vh" }}
            center={center}
            zoom={15}
          >
            {markers.map((marker, index) => (
              <Marker key={index} position={marker} />
            ))}

            <Marker
              className={styles.mapMarker}
              position={center}
              options={
                {
                  // label: {
                  //   text: 'Indicando a Rua',
                  //   color:"black"
                  // },
                }
              }
            />

            <StandaloneSearchBox
              onLoad={onLoad}
              onPlacesChanged={onPlacesChanged}
            >
              <input
                placeholder="Digite um endereço ou número  de CEP "
                className={styles.address}
              />
            </StandaloneSearchBox>
          </GoogleMap>
        </LoadScript>
        <></>
      </div>
    </div>
  );
};

export default MapPage;
