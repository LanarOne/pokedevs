import React from 'react';
import Nav from "./Nav";

const PokemonDisplay = () => {
    return(
        <div>
            <header>
                <Nav/>
                <h1>Pokedev</h1>
            </header>
            <main>
                <h2>Pokemon</h2>
                <p>NSM</p>
            </main>
        </div>
    )
}

export default PokemonDisplay;
