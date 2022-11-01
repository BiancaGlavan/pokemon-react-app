import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.scss';
import axios from 'axios';
import Pokemon, { IPokemon } from './components/Pokemon';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PokemonsPage from './pages/PokemonsPage';
import SinglePokemonPage from './pages/SinglePokemonPage';
import Navigation from './components/Navigation';



function App() {


  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />

        <Routes>
          <Route path='/' element={<PokemonsPage />} />
          <Route path='/pokemons' element={<PokemonsPage />} />
          <Route path='/pokemons/:id' element={<SinglePokemonPage />} />
        </Routes>





      
      </BrowserRouter>


    </div>
  )
}

export default App
