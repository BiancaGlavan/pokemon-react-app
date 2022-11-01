import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon, { IPokemon } from "../components/Pokemon";
import PokemonsList from "../components/PokemonsList";



const PokemonsPage = () => {


  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const baseURL = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    console.log('Console log from useEffect');
    axios.get(baseURL).then((response) => {
      console.log(response.data.results);
      setPokemons(response.data.results);
    });


  }, []);


  return <div className="PokemonsPage">
    <div className="container">
      <PokemonsList pokemons={pokemons} />
    </div>
  </div>
}
export default PokemonsPage;