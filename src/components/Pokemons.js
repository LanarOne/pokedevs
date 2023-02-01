import React, {useEffect, useState} from 'react';
import Nav from "./Nav";
import axios from "axios";
import pokemon from "./Pokemon";
import PokeCard from "./PokeCard";
const PokemonsDisplay = () => {

    const [pokemons, setPokemons] = useState([]);
    useEffect((e)=>{
        axios.get('https://pokebuildapi.fr/api/v1/pokemon/limit/6fv').then((apiPokemon)=>setPokemons(apiPokemon.data)).catch((e)=>console.error(e));
    })
    return(
        <div>
            <header>
                <Nav/>
                <h1>Pokedev</h1>
            </header>
            <main>
                <h2>Pokemons</h2>
                {pokemons.map((element)=> {
                    return (
                        <PokeCard pokemon={element}/>
                    )
                })}
            </main>
        </div>
    )
}
export default PokemonsDisplay;