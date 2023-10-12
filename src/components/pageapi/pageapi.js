
import React, { useState } from 'react';
import styles from './../../styles/pagecepmapa.module.css';

import Map from '../map/map';
import CEPInput from '../cepinput/cepinput';

function App() {
  const [markers, setMarkers] = useState([]);

  const addMarker = (marker) => {
    setMarkers([...markers, marker]);
  };

  return (
    <div className={styles.container}>
    <div className={styles.centeredContent}>
      <h1>Mapa de CEP</h1>
      {/* <CEPInput addMarker={addMarker} /> */}
      <Map markers={markers} />
    </div>
  </div>
  );
}

export default App;
