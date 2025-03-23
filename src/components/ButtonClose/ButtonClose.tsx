"use client"
import React from "react";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

const ButtonClose = ()=>{
    const router = useRouter();
    return(
        <div onClick={()=>{router.push('/')}} className="fixed top-0 right-0 w-12 h-12 flex justify-center items-center bg-white/20 backdrop-blur-3xl hover:bg-yellow-500 cursor-pointer z-30">
            <X strokeWidth={3} color="white"/>
        </div>
    )
}
export default ButtonClose;