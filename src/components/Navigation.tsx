import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {

    return <div className="navigation">
    nav
    <div className="links">
      <Link to={'/'}>Home</Link>
      <Link to={'/pokemons'}>Pokemons</Link>
    </div>
  </div>

}

export default Navigation;