"use client";
import React from "react";
import Image from "next/image";
import logoBrasileirao from "../../../public/brasileirao-serie-a.svg"
import { useRouter } from "next/navigation";

const MenuBar = ()=>{
    const router = useRouter()
    return(
        <nav className="w-full lg:h-40 flex justify-center items-center absolute top-0 animate-enter">
            <button className="uppercase text-sm lg:text-md rounded-l-full border-2 border-r-transparent p-2 
                             hover:text-yellow-500
                             cursor-pointer"
                             onClick={()=>{router.push('times')}}
                             >
                                Times
            </button>
            <Image className="lg:w-24 w-20" width={100} height={100} src={logoBrasileirao} alt="Logo do brasileirão"/>
            <button className="uppercase text-sm lg:text-md rounded-r-full border-2 border-l-transparent p-2
                            hover:text-yellow-500
                             cursor-pointer"
                             onClick={()=>{router.push('jogos')}}
                             >
                                Jogos
            </button>
        </nav>
    )
}
export default MenuBar;