import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import PokemonsDisplay from './components/Pokemons';
import PokemonDisplay from './components/Pokemon';
import PokeGame from './components/Game.js';
import Error404 from "./components/Error404";
import Test from "./components/Test";
import Test2 from "./components/Test2";
import Test3 from "./components/test3";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<PokemonsDisplay/>}/>
              <Route path='/pokemon' element={<PokemonDisplay/>}/>
              <Route path='/pokegame' element={<PokeGame/>}/>
              <Route path='/test' element = {<Test/>}/>
              <Route path='/test2' element={<Test2/>}/>
              <Route path='/test3' element={<Test3/>}/>
              <Route path='*' element = {<Error404/>}/>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
