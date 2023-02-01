import React, {useRef, useState} from 'react';
import Nav from "./Nav";

const Test = () => {

    const [compteur, setCompteur] = useState(10);
    const [stateCompteur, setStateCompteur] = useState(true);
    const countDown = ()=>{
        if(stateCompteur == true){
            setCompteur(compteur-1);
            if(compteur === 1){
                setStateCompteur(false);
            }
        }else{
            setCompteur(compteur+1);
            if(compteur === 9){
                setStateCompteur(true);
            }
        }
    }

    const message = useRef();
    const [inputValue, setInputValue] = useState('')

    const showValueInput = (e)=>{
        e.preventDefault();
        setInputValue(message.current.value)
    };
    return (
        <div>
            <Nav/>
            <h1>Page test</h1>
            <section>
                <h2>Décompte</h2>
                <span>{compteur}</span>
                <button
                    type='button'
                    onClick={countDown}>
                    click
                </button>
            </section>
            <h2>Show value</h2>
            <form action="src" onSubmit={showValueInput}>
                <input type="text" ref={message}/>
                <input type="submit"/>
            </form>
            <span>{inputValue}</span>
            <section>

            </section>
        </div>
    );
};

export default Test;