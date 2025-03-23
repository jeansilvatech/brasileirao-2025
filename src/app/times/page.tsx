"use client"
import ButtonClose from "@/components/ButtonClose/ButtonClose";
import Loading from "@/components/Loading/Loading";
import ScreenAnimateEnter from "@/components/ScreenAnimateEnter/ScreenAnimateEnter";
import Image from "next/image";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";

const Teams = ()=>{
    const [teams, setTeams] = useState<any>(null);
    const router = useRouter()
    useEffect(() => {
        const apiTeams = async ()=>{
            try{
                const response = await fetch('data/teams.json');
                const data = await response.json();
                setTeams(data)
            }catch(err){
                console.log(err)
            }
        }
        apiTeams();
    }, []);
    return(
        <div className="bg-black/85 w-full h-full flex justify-between items-center lg:flex-row flex-col">
            <ScreenAnimateEnter direction={'right-0'}/>
            <ButtonClose/>
            <div className="lg:h-full h-24 lg:w-40 w-screen flex justify-center items-center">
                <h1 className="lg:text-7xl text-4xl text-white lg:-rotate-90 uppercase">Equipes</h1>
            </div>
            <div className=" h-full w-full flex justify-center items-center">
                {
                    teams?(
                        <div className="lg:w-[700px] w-3/4 flex lg:justify-start justify-center items-center flex-wrap">
                            {
                                teams.map((item:any, index:number)=>(
                                    <div key={index} onClick={()=>{router.push(`por_time?name=${item.url}`)}} data-name={`${item.name}`} className="animate-enter m-2 lg:p-2 border-[1px] border-transparent relative hover:border-[1px] hover:bg-yellow-500 hover:backdrop-blur-3xl" title={item.name.toUpperCase()}>
                                        <Image unoptimized className="lg:w-24 lg:h-24 w-12" width={90} height={90} src={`/assets/${item.url}.svg`} alt=""/>
                                    </div>
                                ))
                            }
                        </div>

                    ):(
                        <Loading/>
                    )
            }
            </div>
        </div>
    )
}
export default Teams;