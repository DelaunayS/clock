import React,{useRef} from 'react'

function SonAlarme(props){
    const audioEl=useRef(null)
    return(
        <div>
            <audio id="beep" preload="auto" ref={audioEl} 
            src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
            >
            </audio>
        </div>
    )
}

export default SonAlarme