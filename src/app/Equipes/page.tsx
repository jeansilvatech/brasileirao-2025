"use client"
import Image from "next/image";
import React, {useEffect, useState} from "react";

const Teams = ()=>{
    const [teams, setTeams] = useState<any>(null);
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
            <div className="lg:h-full h-24 lg:w-40 w-screen flex justify-center items-center">
                <h1 className="lg:text-7xl text-4xl text-white lg:-rotate-90 uppercase">Equipes</h1>
            </div>
            <div className=" h-full w-full flex justify-center items-center">
                {
                    teams?(
                        <div className="lg:w-[700px] w-3/4 flex lg:justify-start justify-center items-center flex-wrap">
                            {
                                teams.map((item:any, index:number)=>(
                                    <div key={index} data-name={`${item.name}`} className="m-2 lg:p-2 border-[1px] border-transparent relative hover:border-[1px] hover:border-white/30 hover:bg-white/20 hover:backdrop-blur-3xl" title={item.name.toUpperCase()}>
                                        <Image unoptimized className="lg:w-24 lg:h-24 w-12" width={90} height={90} src={`/assets/${item.url}.svg`} alt=""/>
                                    </div>
                                ))
                            }
                        </div>

                    ):(
                        ''
                    )
            }
            </div>
        </div>
    )
}
export default Teams