import './Pokemon.scss';

export interface IPokemon {
    name: string;
    url: string;
}

interface IPropsPokemon {
    pokemon: IPokemon;
}

const Pokemon = ({ pokemon }: IPropsPokemon) => {

    const parts = pokemon.url.split('/').filter((el, idx) => el !== '').reverse();
    const id = parts[0];

    return <div className="Pokemon">
        <h1 className="pokemon-name">{pokemon.name}</h1>
        <p>Id: {id}</p>
        <div className="pokemon-img">
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`} alt="" />
        </div>

    </div>
}

export default Pokemon;