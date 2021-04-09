import React,{useContext} from"react";
import styled from "styled-components";
import EditorContext from './context';
import run_pause from '../image/run_pause.PNG'
import reset from '../image/reset.png'

const Container =styled.div`
    width:50%;
    height:50%;       
    margin : auto;
    text-align:center;
    display:grid;
    grid-template-columns: 2fr 1fr; 
`
/* Gère le lancement, la pause et la réinitialisation du timer*/
function TimerControl(props){  

    const {timerControl}= useContext(EditorContext);
    const {setTimerControl}=useContext(EditorContext);
    const {setCountSession}=useContext(EditorContext);  
    const {setCountBreak}= useContext(EditorContext);
    const {setTimerType}=useContext(EditorContext) 
    const {setTimer}=useContext(EditorContext) 
    const {colorText}=useContext(EditorContext)   
    

    /*Réinitialise toutes les variables*/
    function Reset(){  
        setCountSession(25)
        setTimerControl(false) 
        setCountBreak(5)
        setTimerType('Session')
        setTimer(1500)
        const audioBeep=document.getElementById('beep')
        audioBeep.pause()   
        audioBeep.currentTime=0  
        colorText.setAttribute("style","color:black")
        colorText.style.borderColor="black"        
        }  
        
        return <Container id="timerControleArray">                           
                <button id="start_stop" 
                        onClick={() => setTimerControl(v=>!v)} 
                        value={timerControl}> 
                        <img alt={"run_pause"} src={run_pause} />
                </button> 

                <button id="reset"
                        onClick={Reset}>
                        <img alt={"reset"} src={reset} />
                </button>          
            </Container>
}

export default TimerControl