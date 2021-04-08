import React, { useState } from 'react';
import BreakLength from './breakLength'
import SessionLength from './sessionLength'
import Timer from './timer'
import TimerControl from './timerControl'
import EditorContext from './context'
import SonAlarme from './sonAlarme'
import Footer from './footer'

function App(){

  const [countSession,setCountSession]=useState(25)
  const [timerControl,setTimerControl]=useState(false)
  const [countBreak,setCountBreak]= useState(5);
  const [timerType,setTimerType]=useState('Session')
  const [timer,setTimer]=useState(1500)
  const colorText=document.getElementById('clock_array')

  const contextValue = {
    countSession,setCountSession,
    timerControl,setTimerControl,
    countBreak,setCountBreak,
    timerType,setTimerType,
    timer,setTimer,
    colorText

  };

return(
  
    <EditorContext.Provider value={contextValue}>
        <h1 id="h1_title" align="center">Clock 25min + 5min</h1>
        <BreakLength></BreakLength>        
        <SessionLength></SessionLength>
        <br />
        <Timer></Timer>
        <br />
        <TimerControl></TimerControl>
        <SonAlarme></SonAlarme>
        <br />
        <Footer></Footer>
        
  </EditorContext.Provider>  
  
);
}

export default App;