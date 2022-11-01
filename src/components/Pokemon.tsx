import './Pokemon.scss';

export interface IPokemon {
    name: string;
    url: string;
}

interface IPropsPokemon {
    pokemon: IPokemon;
}

const Pokemon = ({pokemon}: IPropsPokemon) => {

    const parts = pokemon.url.split('/').filter((el, idx) => el !== '').reverse();
    const id = parts[0];

    return <div className="Pokemon">
        <h1 className="pokemon-name">{pokemon.name}</h1> 

        <p className="url">
        {pokemon.url}
        </p>
        <p>Id: {id}</p>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${parts[0]}.svg`} alt="" />
    </div>
}

export default Pokemon;