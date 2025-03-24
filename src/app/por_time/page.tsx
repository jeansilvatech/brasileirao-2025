"use client"
import ButtonClose from "@/components/ButtonClose/ButtonClose";
import Loading from "@/components/Loading/Loading";
import ScreenAnimateEnter from "@/components/ScreenAnimateEnter/ScreenAnimateEnter";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Selection = ()=>{
    const [ matches, setMatches] = useState<any>(null);
    const [ round, setRound ]= useState(0);
    const [ totalRounds, setTotalRounds ] = useState(0);
        
        const apiMatches = async(round:number)=>{
            try{
                const response = await fetch('data/matches.json');
                const data = await response.json()
                setMatches(data[round].matches)
                setTotalRounds(data.length)
            }catch(err){
                console.log(err)
            }
        }
    useEffect(()=>{
        apiMatches(round);
    },[round]);

    const prevRound = ()=>{
        if(round>0){
            setRound(round-1)
        }
    }
    const nextRound = ()=>{
        if(round <totalRounds - 1){
            setRound(round+1);
        }
    }
    if (typeof window !== 'undefined') {
        let windowParams = window.location;
        const params = new URLSearchParams(windowParams.search);
        const name = params.get('name');
        return(
            <div className="bg-black/90 text-white w-full h-full flex justify-between items-center lg:flex-row flex-col">
                <ScreenAnimateEnter direction={'left-0'}/>
                <ButtonClose/>
                <div className="absolute top-0 right-0 w-full h-full flex justify-end items-start
                                before:content-[''] before:inset-0 before:absolute before:w-full before:h-full lg:before:bg-gradient-to-l lg:before:via-black/70 lg:before:from-black before:bg-gradient-to-t before:via-black/95 before:from-black/95">
                    <Image unoptimized className="w-auto h-full object-contain object-center" src={`/assets/${name}.svg`}  width={90} height={90} alt=""  />
                </div>
                <div className="lg:h-full h-24 lg:w-40 w-screen flex justify-center items-center">
                    <h1 className="lg:text-7xl text-4xl  lg:-rotate-90 uppercase">Jogos</h1>
                </div>
                <div className="h-full w-full flex justify-center items-center flex-col relative">
                    <h2 className="w-full text-center uppercase font-semibold lg:text-4xl">{round+1}ª rodada</h2>
                    {
                        matches?(
                            <div className="lg:w-auto w-full flex justify-center items-center flex-wrap flex-col">
                                {
                                    matches.map((item:any, index:number)=>(
                                        item.principal==name || item.visitor ==name?(
                                            <div key={index} className="lg:w-auto w-full flex justify-center items-center animate-enter bg-white/20 backdrop-blur-3xl p-4 m-2 hover:bg-yellow-500 cursor-pointer">
                                                <div className="flex justify-center items-center">
                                                    <Image unoptimized className="w-24 h-24" src={`/assets/${item.principal}.svg`}  width={90} height={90} alt="" />
                                                </div>
                                                <div className="">
                                                    <X color="#ffffff" size={40} strokeWidth={1}/>
                                                </div>
                                                <div className="flex justify-center items-center">
                                                <Image unoptimized className="w-24 h-24" src={`/assets/${item.visitor}.svg`}  width={90} height={90} alt="" />
                                                </div>
                                            </div>
                                        ):(
                                            ''
                                        )
                                        
                                    ))
                                }
                                <div className="flex justify-center items-center">
                                <button className="cursor-pointer p-2 bg-white/30 hover:bg-yellow-500" onClick={prevRound} disabled={round===0}>
                                    <ChevronLeft size={30} color="#ffff"/>
                                </button>
                                <button className="cursor-pointer p-2 bg-white/30 hover:bg-yellow-500" onClick={nextRound} disabled={round===totalRounds-1}>
                                    <ChevronRight size={30} color="#ffff"/>
                                </button>
        
                                </div>  
                            </div>
    
                        ):(
                           <Loading/> 
                        )
                    }
                </div>
            </div>
        )
    }
   
}
export default Selection