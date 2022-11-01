import React from "react";
import { Link } from "react-router-dom";
import './Navigation.scss';

const Navigation = () => {

  return <div className="navigation">
    <div className="container">
      <div className="menu"> 
      <Link to={'/'}><span className="logo">Pokemon App</span></Link>

        <div className="links">
          <Link to={'/'}>Home</Link>
          <Link to={'/pokemons'}>Pokemons</Link>
        </div>
      </div>
    </div>

  </div>

}

export default Navigation;