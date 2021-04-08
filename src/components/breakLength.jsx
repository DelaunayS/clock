import React, {useContext} from"react";
import styled from "styled-components";
import EditorContext from './context';

const Container =styled.div`
    width:50%;
    height:100%;
    padding:1%;
    border 1px;
    border-style: solid  solid none ;
    margin : auto;
    text-align:center;
`
const Title =styled.div`
    width:100%;
    height:100%;
    font-size: 2.5vw;    
`
const Text =styled.div`
    width:100%;
    height:100%;
    font-size: 2.5vw;
    display:grid;
    grid-template-columns: repeat(3, 1fr); 
`
/*Permet de gérer les boutons de la zone Break Length et sa valeur*/
function Counter({initialCount=5}){

    const {timerControl}= useContext(EditorContext)
    const {countBreak}= useContext(EditorContext)
    const {setCountBreak}= useContext(EditorContext)    

    function decrement(arg,testTimer){
        if (arg>1 & (!testTimer)){
            arg--            
        }
        return arg
    }
    function increment(arg,testTimer){
        if (arg<=59 & (!testTimer)){
            arg++           
        }
        return arg
    }

    return(
        <Text id="break-label">
            <button id="break-decrement" onClick={() => setCountBreak(decrement(countBreak,timerControl))}>-</button>
            <div id="break-length">{countBreak}</div>
            <button id="break-increment" onClick={() => setCountBreak(increment(countBreak,timerControl))}>+</button>
        </Text>        

    );
}

function BreakLength(props){    

    return <Container>
                <Title> Break Length</Title>               
                    <Counter></Counter>                                      
            </Container>
}


export default BreakLength