import React from "react";

const Footer = ()=>{

    const date = new Date();
    return(
        <footer className="fixed w-full p-2 bottom-0 left-0 font-light text-sm flex justify-center items-center flex-col">
            <p className="font-light text-sm">Desenvolvido por <span className="font-bold">Jean</span></p>
            <p>{date.getFullYear()}</p>
        </footer>
    )
}
export default Footer;