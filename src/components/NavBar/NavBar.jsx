import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img className="logoimg" src={require("../assets/logo.png")} alt="Logo" />
      <div className="logo">Tienda musical</div>
      <div className="categories">
        <a href="#">Pianos</a>
        <a href="#">Guitarras</a>
        <a href="#">Flautas</a>
      </div>
      <CartWidget itemCount={5} />
    </nav>
  );
};

export default NavBar;
