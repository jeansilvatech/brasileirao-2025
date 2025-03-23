"use client"
import Image from "next/image";
import React, {useState, useEffect} from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Table = ()=>{
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
    return(
        <div className="bg-black/85 text-white w-full h-full flex justify-between items-center lg:flex-row flex-col">
            <div className="lg:h-full h-24 lg:w-40 w-screen flex justify-center items-center">
                <h1 className="lg:text-7xl text-4xl  lg:-rotate-90 uppercase">Jogos</h1>
            </div>
            <div className="h-full w-full flex justify-center items-center flex-col">
                <h2 className="w-full text-center uppercase font-semibold lg:text-4xl">{round+1}ª rodada</h2>
                {
                    matches?(
                        <div className="lg:w-auto w-full flex justify-center items-center flex-wrap">
                            {
                                matches.map((item:any, index:number)=>(
                                    <div key={index} className="flex justify-center items-center animate-enter bg-white/20 backdrop-blur-3xl p-4 m-2 hover:bg-yellow-500 cursor-pointer">
                                        <div>
                                            <Image unoptimized className="lg:w-24 lg:h-24 w-12" src={`/assets/${item.principal}.svg`}  width={90} height={90} alt="" />
                                        </div>
                                        <div className="">
                                            <X color="#ffffff" size={40} strokeWidth={1}/>
                                        </div>
                                        <div>
                                        <Image unoptimized className="lg:w-24 lg:h-24 w-12" src={`/assets/${item.visitor}.svg`}  width={90} height={90} alt="" />
                                        </div>
                                    </div>
                                ))
                            }
                            <div>
                            <button className="cursor-pointer p-2 bg-white/30 hover:bg-yellow-500" onClick={prevRound} disabled={round===0}>
                                <ChevronLeft size={30} color="#ffff"/>
                            </button>
                            <button className="cursor-pointer p-2 bg-white/30 hover:bg-yellow-500" onClick={nextRound} disabled={round===totalRounds-1}>
                                <ChevronRight size={30} color="#ffff"/>
                            </button>
    
                            </div>
                            
                        </div>

                    ):(
                        ''
                    )
                }
            </div>
        </div>
    )
}
export default Table;