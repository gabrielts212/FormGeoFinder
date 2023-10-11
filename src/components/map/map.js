import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import React, { useState } from "react";
import { LoadScript, StandaloneSearchBox } from "@react-google-maps/api";

import  styles from "./../../styles/api.module.css";

const MapPage = () => {


  const [map, setMap] = useState(null);
  const [searchBox, setSearchBox] = useState(null);
  const [markers, setMarkers] = useState([]);

  const position = {
    lat: -27.590824,
    lng: -48.551262,
  };
  const onMapLoad = (map) => {
    setMap(map);
  };

  const onLoad = (ref) => {
    setSearchBox(ref);
  };

  // const onPlacesChanged = () => {
  //   if (searchBox) {
  //     const places = searchBox.getPlaces();
  //     console.log(places);
  //     if (places.length > 0) {
  //       const place = places[0];
  //       const location = {
  //         lat: place.geometry.location.lat() || 0,
  //         lng: place.geometry.location.lng() || 0,
  //       };
  //       setMarkers([...markers, location]);
  //       map.panTo(location);
  //     }
  //   }
  // };
  const onPlacesChanged = () => {
    const places = searchBox.getPlaces();
    console.log(places);
    const place = places[0];
    const location = {
      lat: place?.geometry?.location?.lat() || 0,
      lng: place?.geometry?.location?.lng() || 0,

    }
    // setMarkers([...markers, location])
    map?.panTo(location)
  };

  return (
    <div  className={styles.map} >
      
    <LoadScript googleMapsApiKey={"AIzaSyCO-vDdf7TyuszVt16uV9xY53uCcBygA5k"} libraries={['places']} >
      <GoogleMap
        onLoad={onMapLoad}
        mapContainerStyle={{ width: "100vh", height: "80vh" }}
        center={position}
        zoom={15}
       
      >
          <Marker
          className={styles.mapMarker}
            position={position}
            options={{
              label: {
                text: 'Posição Teste',
               
              },
            }}
          />
          
        <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlacesChanged}>
          <input  placeholder="Digite um endereço" className={styles.address}/>
        </StandaloneSearchBox>

        {markers.map((marker, index) => (
          <Marker key={index} position={marker} />
        ))}



      </GoogleMap>
    </LoadScript>
    <></>
  </div>
  );
};

export default MapPage;
