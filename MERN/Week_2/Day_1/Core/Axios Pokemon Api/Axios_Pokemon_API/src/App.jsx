import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [axiosPokeball, setAxiosPokeball] = useState([]);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => {
        console.log("AXIOS RESPONSE :", response.data);
        setAxiosPokeball(response.data.results);
      })
      .catch(error => {
        console.log("AXIOS ERROR:", error);
      });
  }, []);

  return (
    <>
      <>
        <h1>Axios Pokémon Names</h1>
        {axiosPokeball.map((pokemon, index) => (
          <ul key={index}>
            <li>{pokemon.name}</li>
          </ul>
        ))}
      </>
    </>
  );
}

export default App;