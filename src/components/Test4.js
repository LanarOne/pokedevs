import React, {useEffect, useState} from 'react';
import Nav from "./Nav";
import axios from "axios";
import PokeCard from "./PokeCard";
import FirstBtn from "./firstBtn";
import SecondBtn from "./secondBtn";

const Test4 = () => {
    const [buttonState, setButtonState] = useState(true)
    const changeMode = () => {
        if(buttonState == true){
            setButtonState(false)
        }else{
            setButtonState(true)
        }
    }
    const [pokemonTypes, setPokemonTypes] = useState([])
    const [pokemonsRandom, setPokemonsRandom] = useState([]);
    useEffect(()=>{
        axios.get('https://pokebuildapi.fr/api/v1/types').then((getPokeTypes)=>setPokemonTypes(getPokeTypes.data)).catch((e)=>console.error(e));
    })
    useEffect(()=>{
        axios.get('https://pokebuildapi.fr/api/v1/random/team').then((getPokemonsRandom)=>setPokemonsRandom(getPokemonsRandom.data)).catch((e)=>console.error(e));
    }, [])
    return (
        <div>
            <Nav/>
            <h1>PokeRandom</h1>
            <section className='pokeTeamDisplay'>
                <h2>pokeTeam</h2>
                <button onClick={changeMode}>Mode</button>
                {pokemonsRandom.map((pokemonRandom)=>{
                    return <PokeCard pokemon={pokemonRandom} buttonState={buttonState}/>

                })}
            </section>
            <section>
                <h2>pokeTypes</h2>
                <button></button>
                {pokemonTypes.map((pokemonType)=>{
                    return <div>
                        <article>
                            <h3>{pokemonType.name}</h3>
                            <img src={pokemonType.image}/>
                            {buttonState?(
                                <FirstBtn/>
                            ):(
                                <SecondBtn/>
                            )}
                        </article>
                    </div>

                })}

            </section>
        </div>
    )
};

export default Test4;