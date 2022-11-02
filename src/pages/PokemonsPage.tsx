import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pokemon, { IPokemon } from "../components/Pokemon";
import PokemonsList from "../components/PokemonsList";
import Pagination from "../components/Pagination";



const PokemonsPage = () => {


  const [pokemons, setPokemons] = useState<IPokemon[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const baseURL = `https://pokeapi.co/api/v2/pokemon?offset=${20 * currentPage - 20}&limit=20`;

  useEffect(() => {
    console.log('Console log from useEffect');
    axios.get(baseURL).then((response) => {
      console.log(response.data.results);
      setPokemons(response.data.results);
      const pagesNr = Math.ceil(response.data.count / 20);
      setTotalPages(pagesNr);
    });


  }, [baseURL]);


  return <div className="PokemonsPage">
    <div className="container">
    <Pagination onPageChange={setCurrentPage} totalPages={totalPages} currentPage={currentPage} />
      <PokemonsList pokemons={pokemons} />
      <Pagination onPageChange={setCurrentPage} totalPages={totalPages} currentPage={currentPage} />
    </div>
  </div>
}
export default PokemonsPage;