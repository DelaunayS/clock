import React from "react";

const defaultContext ={   
    countSession: "",
    setCountSession: () => {},
    timerControle:false,    
    setTimerControl: () => {},
    countBreak: "",
    setCountBreak: () => {},
    timerType:"",
    setTimerType: ()=> {},
    timer:"",
    setTimer:()=>{},
    colorText:""

};

export default React.createContext(defaultContext)