import React from 'react';
import Bulma from '../media/Bulma.png'
import Chichi from '../media/Chichi.webp'
import Gohan from '../media/Gohan.png'
import Goku from '../media/Goku.webp'
import Goten from '../media/Goten.png'
import Trunks from '../media/Trunks.png'
import Vegeta from '../media/Vegeta.webp'

const Images = () => {
    const imgBulma = Bulma;
    const imgChichi = Chichi;
    const imgGohan = Gohan;
    const imgGoku = Goku;
    const imgGoten = Goten;
    const imgTrunks = Trunks;
    const imgVegeta = Vegeta;

    return (
        <div>
            <img src={Bulma} alt=""/>
            <img src={Chichi} alt=""/>
            <img src={Gohan} alt=""/>
            <img src={Goku} alt=""/>
            <img src={Goten} alt=""/>
            <img src={Trunks} alt=""/>
            <img src={Vegeta} alt=""/>
        </div>
    );
};

export default Images;