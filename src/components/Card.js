import React from 'react';
import deleteCard from './test3'

const imgPath = '../media/';

const Card = ({props}) => {
    return (
        <div>
            <article key={props.id} className='characCard'>
                <h3>{props.name}</h3>
                <div><img src={imgPath+props.image} alt=""/></div>
                <p>{props.description}</p>
                <div className="btns">
                    <button onClick={()=>deleteCard(props.id)}>Delete</button>
                    <button>Modify</button>
                </div>
            </article>
            )
        </div>
    );
};

export default Card;