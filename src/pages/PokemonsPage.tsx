import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon, { IPokemon } from "../components/Pokemon";



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
        Pokemons Page


        <div className="pokemons-container">
          {pokemons.map((pok, idx) => {

            const parts = pok.url.split('/').filter((el, idx) => el !== '').reverse();
            const id = parts[0];

            return <Link key={idx} to={`/pokemons/${id}`}><Pokemon pokemon={pok}/></Link>;
          })}
        </div>

    </div>
}
export default PokemonsPage;