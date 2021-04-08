import React, {useEffect, useContext} from "react";
import styled from "styled-components";
import EditorContext from './context';

const Container =styled.div`
    width:250px;
    height:250px;    
    border:solid 3px black;
    border-radius: 155px;
    margin : auto;
    padding : 15px;
    align-items : center;
    text-align:center;
`
const Title =styled.div`    
    font-size: 50px;    
`
const Text =styled.div`        
    font-size: 100px;
`
/* rend l'affichage en mm:ss */
function afficheMinutesSecondes(arg){
    
    let minutes=Math.floor(arg/60)
    let seconds=arg-minutes*60
    seconds = seconds <10 ? '0'+ seconds : seconds
    minutes = minutes <10 ? '0'+ minutes : minutes
    
    return minutes+':'+seconds

}

/*gère l'écoulement du timer et des options*/
function TimeLeft({initialCount}){
    
    const {countBreak}=useContext(EditorContext)
    const {timerType}=useContext(EditorContext)
    const {setTimerType}=useContext(EditorContext)
    const {countSession}= useContext(EditorContext)   
    const {timerControl}= useContext(EditorContext)
    const {timer}= useContext(EditorContext);
    const {setTimer}=useContext(EditorContext)
    const audioBeep=document.getElementById('beep')
    const {colorText}=useContext(EditorContext)

    useEffect(function(){
        
        if (timerControl ){
            const timerRun=window.setInterval(function(){ 
                setTimer(timer-1)                             
            },1000)

            /*change le nom du timer, change sa valeur et lance l'avertissement sonore*/
            if (timer===0){
                if (timerType==='Session'){
                    setTimerType('Break')
                    setTimer(60*countBreak)                    
                    audioBeep.play()

                }else{
                    setTimerType('Session')
                    setTimer(60*countSession)                    
                    audioBeep.play()
                } 
            }

            /*lance l'avertissement sonore*/
            if (timer===60){                
                audioBeep.play()
            }

            /*change la couleur du texte sous la minute*/
            if (timer>60){                
                colorText.setAttribute("style","color:black")
                colorText.style.borderColor="black"
            }else{
                colorText.setAttribute("style","color:red")
                colorText.style.borderColor="red"
            }

            return function(){
                clearInterval(timerRun)
            }
        }         

    },[countSession, countBreak, timerControl, timerType, setTimerType, audioBeep, timer, setTimer, colorText])

    return(
        <Text id="time-left">            
            {afficheMinutesSecondes(timer)}            
        </Text> 
    );
}

function Timer(props){  
    
    const {timerType}=useContext(EditorContext)

    return <Container id="clock_array">
                <Title id="timer-label">{timerType}</Title>               
                <TimeLeft></TimeLeft>                                    
            </Container>            
}

export default Timer