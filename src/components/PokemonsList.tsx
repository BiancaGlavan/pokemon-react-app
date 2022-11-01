import { Link } from "react-router-dom";
import Pokemon, { IPokemon } from "./Pokemon";
import "./PokemonsList.scss";

interface IPropsPokemonsList {
    pokemons: IPokemon[];
    
}

const PokemonsList = (props: IPropsPokemonsList) => {

    const {pokemons} = props;

    return <div className="PokemonsList">
    {pokemons.map((pok, idx) => {

      const parts = pok.url.split('/').filter((el, idx) => el !== '').reverse();
      const id = parts[0];

      return <Link key={idx} to={`/pokemons/${id}`}><Pokemon pokemon={pok}/></Link>;
    })}
  </div>
}

export default PokemonsList;