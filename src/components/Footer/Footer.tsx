import React from "react";
import logoJS from '../../../public/logojs.webp'
import Image from "next/image";

const Footer = ()=>{

    const date = new Date();
    return(
        <footer className="fixed w-full p-2 bottom-0 left-0 font-light text-sm flex justify-center items-center flex-col">
            <p className="font-light text-sm flex justify-center items-center">desenvolvido por <a href="https://jeansilvatech.vercel.app" target="_blank"><Image className="mx-1" unoptimized src={logoJS} width={35} height={35} alt="logo Jean Silva Tech"/></a></p>
            <div className="w-1/6 h-[1px] bg-white/70 mb-2 rounded-[100%]"></div>
            <p className="text-xs text-yellow-500">{date.getFullYear()}</p>
        </footer>
    )
}
export default Footer;