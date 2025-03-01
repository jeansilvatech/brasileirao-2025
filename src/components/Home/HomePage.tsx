import React from "react";
import MenuBar from "../MenuBar/MenuBar";
const HomePage = ()=>{
    return(
    <div className="w-screen h-screen flex items-center justify-center text-white bg-no-repeat bg-cove bg-gradient-to-t from-black via-black/70 ">
      <MenuBar/>
      <div className="text-center w-screen">
      <div className="home lg:text-5xl text-sm font-extralight tracking-[6px] uppercase  ">Fique por dentro do</div>
      <div className="home px-3 lg:text-7xl text-4xl font-bold uppercase text-yellow-500">Brasileirão 2025</div>
      </div>
      </div>
    )
}

export default HomePage;