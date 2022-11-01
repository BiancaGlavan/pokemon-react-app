import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


interface IType {
    name: string;
    url: string;
} 

interface ITypesItem {
    slot: number;
    type: IType;
}

interface IAbility {
    name: string;
    url: string;
}

interface IAbilitiesItem {
    slot: number;
    is_hidden: boolean;
    ability: IAbility;
}

interface IApiPokemon {
    id: number;
    height: number;
    weight: number;
    order: number;
    name: string;
    types: ITypesItem[];
    abilities: IAbilitiesItem[];
}


const SinglePokemonPage = () => {

    
    const params = useParams();
    const pokemonID = params.id;

    const [pokemon, setPokemon] = useState<IApiPokemon | null>(null);


    console.log(pokemonID);
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/' + pokemonID;
    
    useEffect(() => {
        axios.get(baseURL).then((response) => {
            console.log(response.data);
            setPokemon(response.data);
          });
    }, []);

    return <div className="SinglePokemonPage">
        Single Pokemon Page
        <h2>{pokemon?.name}</h2>
        {pokemon?.abilities.map((el, idx) => {
            return <div key={idx}>{el.ability.name}</div>
        })}
    </div>
}
export default SinglePokemonPage;