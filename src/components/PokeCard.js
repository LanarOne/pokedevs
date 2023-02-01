import React, {useEffect, useState} from 'react';
import FirstBtn from "./firstBtn";
import SecondBtn from "./secondBtn";

const PokeCard = ({pokemon, buttonState}) => {
    const [pokeLikesCount, setPokeLikesCount] = useState(0)
    const likesCount = () => {
        setPokeLikesCount(pokeLikesCount + 1)
    }
    return (
        <article key={pokemon.id} className='pokeCard'>
            <h3>{pokemon.name}</h3>
            <p onClick={likesCount}>♥{pokeLikesCount}</p>
            <div className="pokeImg">
                <img src={pokemon.image} alt=""/>
            </div>
            <div className="blocType">
                {pokemon.apiTypes.map((type, i)=>{
                    return <div key={pokemon.id+'-'+i}><img src={type.image}/></div>
                })}
            </div>
            {buttonState?(
                <FirstBtn nameProps={pokemon.name}/>
            ):(
                <SecondBtn nameProps={pokemon.name}/>
            )}
        </article>
    );
};

export default PokeCard;