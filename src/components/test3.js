import React, {useState} from 'react';
import Modal from "../components/modal.js";


const Test3 = () => {
    const [characters, setCharacters] = useState([
        {id: 1, name: 'Sangoku', image: '../media/Goku.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 2, name: 'Vegeta', image: '../media/Vegeta.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 3, name: 'Bulma', image: '../media/Bulma.png', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 4, name: 'Goten', image: '../media/Goten.png' , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 5, name: 'Gohan', image: '../media/Gohan.png', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 6, name: 'Chichi', image: '../media/Chichi.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 7, name: 'Trunk', image: '../media/Trunks.png', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'}
    ]);

    const deleteCard = (e) => {
        const charaClone = [...characters]
        const charaDelete = charaClone.filter((character) => character.id !== e)
        setCharacters(charaDelete)
    }
    const showModal = () => {
        
    }

    return (

        <div>
                {characters.map((character) =>{
                return (
                    <article key={character.id} className='characCard'>
                        <h3>{character.name}</h3>
                        <div><img src={character.image} alt=""/></div>
                        <p>{character.description}</p>
                        <div className="btns">
                            <button onClick={()=>deleteCard(character.id)}>Delete</button>
                            <button onClick={e =>{this.showModal()}}>Modify</button>
                        </div>
                    </article>
                )
            })}
        </div>
    );
};
export default Test3;