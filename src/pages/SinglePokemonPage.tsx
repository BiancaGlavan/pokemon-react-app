import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IPokemon } from "../components/Pokemon";
import PokemonsList from "../components/PokemonsList";
import './SinglePokemonPage.scss';

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
    sprites: {
        front_default: string;
        other: {
            dream_world: {
                front_default: string;
            };
            home: {
                front_default: string;
            };
        }
    }
}


const SinglePokemonPage = () => {

    const params = useParams();
    const pokemonID = params.id;

    const [pokemon, setPokemon] = useState<IApiPokemon | null>(null);

    const [pokemons, setPokemons] = useState<IPokemon[]>([]);


    console.log(pokemonID);
    const baseURL = 'https://pokeapi.co/api/v2/pokemon/' + pokemonID;


    const getPokemonImg = (pokemonObj: IApiPokemon | null) => {
        if(!pokemonObj?.sprites) {
            return '';
        }
        return pokemonObj.sprites.other.dream_world.front_default || pokemonObj.sprites.front_default || pokemonObj.sprites.other.home.front_default || '';
    }

    useEffect(() => {
        if (pokemon !== null) {
            const pokemonType = pokemon.types.map((el, idx) => el.type.name)[0];

            console.log('this is pokemon type:', pokemonType);

            axios.get(`https://pokeapi.co/api/v2/type/${pokemonType}`).then((response) => {
                console.log('!!!!!!!!ggggggg', response.data.pokemon);

                const newPokemonList = response.data.pokemon.map((el: any, idx: number) => el.pokemon);
                console.log('new pokemon list: ', newPokemonList);
                setPokemons(newPokemonList);
            });


          
        }

    }, [pokemon]);


    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPokemon(response.data);
            // window.scrollTo(0, 0);
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }, [pokemonID]);

    return <div className="SinglePokemonPage">

        <div className="container">
            <Link to={'/pokemons'}>
            <button className="btn-single-page">Back</button>
            </Link>
            
        </div>
        <div className="single-pokemon-container">
            <img src={getPokemonImg(pokemon)} alt="" />
            <p><span>Pokemon Name:</span> {pokemon?.name}</p>
            <p>
                <span>Abilities:</span> {pokemon?.abilities.map((el, idx) => el.ability.name).join(', ')}
            </p>
            <p>
                <span>Types:</span> {pokemon?.types.map((el, idx) => el.type.name).join(', ')}
            </p>
            <p><span>Height:</span> {pokemon?.height}</p>
            <p><span>Weight:</span> {pokemon?.weight}</p>
            <p><span>Order:</span> {pokemon?.order}</p>
            <p><span>Id:</span> {pokemon?.id}</p>
        </div>
        <div className="container">
            <p className="more-single-page">More from this type: </p>
            <PokemonsList pokemons={pokemons} />
        </div>
    </div>
}
export default SinglePokemonPage;