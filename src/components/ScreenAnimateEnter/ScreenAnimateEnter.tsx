import React from "react";

interface ScreenAnimateEnterProps{
    direction: String;
}
const ScreenAnimateEnter = (props:ScreenAnimateEnterProps)=>{
    return(
        <div className={`fixed ${props.direction} animate-screen top-0 h-full bg-white/20 backdrop-blur-3xl z-50`}>

        </div>
    )
}
export default ScreenAnimateEnter;