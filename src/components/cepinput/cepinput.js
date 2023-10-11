import React, { useState } from 'react';
import axios from 'axios';

function CEPInput({ addMarker }) {
  const [cep, setCEP] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleCEPChange = (e) => {
    setCEP(e.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    setError(null);

    axios
      .get(`https://viacep.com.br/ws/${cep}/json/`)
      .then((response) => {
        const { logradouro, localidade, uf, lat, lng } = response.data;
        const marker = {
          name: `${logradouro}, ${localidade}, ${uf}`,
          position: { lat: parseFloat(lat), lng: parseFloat(lng) },
        };
        setAddress(`${logradouro}, ${localidade}, ${uf}`);
        addMarker(marker);
      })
      .catch((error) => {
        setError('CEP não encontrado ou ocorreu um erro na busca.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="cep-input">
      <input
        type="text"
        placeholder="Digite o CEP"
        value={cep}
        onChange={handleCEPChange}
      />
      <button onClick={handleSearch} disabled={loading}>
        {loading ? 'Buscando...' : 'Pesquisar'}
      </button>
      {error && <p className="error-message">{error}</p>}
      {address && <p>Endereço: {address}</p>}
    </div>
  );
}

export default CEPInput;
