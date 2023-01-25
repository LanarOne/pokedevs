import React, {useEffect, useState} from 'react';


const PokeCard = ({pokemon}) => {
    return (
        <article key={pokemon.id}>
            <h3>{pokemon.name}</h3>
            <div className="pokeImg">
                <img src={pokemon.image} alt=""/>
            </div>
            <div className="blocType">
                {pokemon.apiTypes.map((type, i)=>{
                    return <div key={pokemon.id+'-'+i}><img src={type.image}/></div>
                })}
            </div>
            <div className="blocStats">

            </div>
        </article>
    );
};

export default PokeCard;