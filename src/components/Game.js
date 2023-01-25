import React from 'react';
import Nav from "./Nav";
const PokeGame = () => {
    return(
        <div>
            <header>
                <Nav/>
                <h1>Pokedev</h1>
            </header>
            <main>
                <h2>Game</h2>
                <p>PokeDinguerie</p>
            </main>
        </div>
    );
};

export default PokeGame;
