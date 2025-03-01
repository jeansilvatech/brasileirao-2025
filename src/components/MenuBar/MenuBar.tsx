import React from "react";
import Image from "next/image";
import logoBrasileirao from "../../../public/brasileirao-serie-a.png"

const MenuBar = ()=>{
    return(
        <nav className="w-full h-40 flex justify-center items-center absolute top-0">
            <button className="uppercase">Equipes</button>
            <Image width={100} height={100} src={logoBrasileirao} alt="Logo do brasileirão"/>
            <button className="uppercase">Tabela</button>
        </nav>
    )
}
export default MenuBar;