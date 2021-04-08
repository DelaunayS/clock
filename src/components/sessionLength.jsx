import React, {useContext} from"react";
import styled from "styled-components";
import EditorContext from './context';

const Container =styled.div`
    width:50%;
    height:50%;
    padding:1%;
    border:1px solid black;
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
/*Permet de gérer les boutons de la zone Session Length et sa valeur*/
function Counter({initialCount=25}){
    
    const {timerControl}= useContext(EditorContext);
    const {countSession}= useContext(EditorContext);
    const {setCountSession}=useContext(EditorContext);
    const {setTimer}=useContext(EditorContext)
       
    function decrement(arg,testTimer){
        if (arg>1 & (!testTimer)){
            arg--
            setTimer(arg*60)
        }
        return arg
    }
    function increment(arg,testTimer){
        if (arg<=59 & (!testTimer)){
            arg++
            setTimer(arg*60)
        }
        return arg
    }

    return(
        <Text id="session-label">
            <button  id="session-decrement" onClick={() => setCountSession(decrement(countSession,timerControl))}>-</button>
            <div id="session-length">{countSession}</div>
            <button id="session-increment" onClick={() => setCountSession(increment(countSession,timerControl))}>+</button>
        </Text>        

    );
}

function SessionLength(props){    

    return <Container>
                <Title> Session Length</Title>               
                    <Counter></Counter> 
                                    
            </Container>
}


export default SessionLength