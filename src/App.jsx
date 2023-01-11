import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonList from "./pages/PokemonList";
import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/pokemonlist" element={<PokemonList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
