import React, {useState} from 'react';
import Card from "./Card";
import Nav from "./Nav";

const Test3 = () => {
    const [characters, setCharacters] = useState([
        {id: 1, name: 'Sangoku', image: 'Goku.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 2, name: 'Vegeta', image: 'Vegeta.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 3, name: 'Bulma', image: 'Bulma.png', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 4, name: 'Goten', image: 'Goten.png' , description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 5, name: 'Gohan', image: 'Gohan.png', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 6, name: 'Chichi', image: 'Chichi.webp', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'},
        {id: 7, name: 'Trunk', image: 'Trunks.png', description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto corporis dignissimos pariatur quis, sit ut!'}
    ]);
    // const imgPath = '..media/';
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [imgActive, setImgActive] = useState(false);
    const [description, setDescription] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value);
    }
    const handlefileChange = (e) => {
        if(e){
            setImgActive(true);
            setImage(e.target.files[0]);
            console.log(image)

        }
    }
    const handleDescChange = (e) => {
        setDescription(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const charactersClone = [...characters];
        setId(characters[characters.length-1].id+1);
        charactersClone.push({id, name, image: image.name, description});
        setCharacters(charactersClone);
    }
    const deleteCard = (e) => {
        alert('toto')
    }

    return (
        <div>
            <Nav/>
            <section>
                <h2>Characters</h2>
                    {characters.map((character) =>{
                        return (
                            <Card props = {character}/>
                        )
                })}
            </section>
            <section>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Charac name</label>
                    <input type="text" onChange={handleNameChange} placeholder='name'/>
                    {imgActive ?(
                        <p>My file: {image.name}; Weight: {image.size} bytes</p>
                    ):(
                        <label htmlFor="file">Charac image</label>
                    )}
                    <input type='file' onChange={handlefileChange}/>
                    <label htmlFor="description">Charac Description</label>
                    <input type="text" onChange={handleDescChange} placeholder='description'/>
                    <input type="submit"/>
                </form>
            </section>
        </div>
    );
};
export default Test3;