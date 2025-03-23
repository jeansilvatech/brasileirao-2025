import React from "react";
import Image from "next/image";
import logo from '../../../public/brasileirao-serie-a.svg'

const Loading = ()=>{
    return(
        <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-white/20 backdrop-blur-3xl z-40">
            <Image src={logo} width={90} height={90} alt=""/>
        </div>
    )
}
export default Loading