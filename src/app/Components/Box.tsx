"use client"
import React,{useState} from 'react'

const Box = ({value,ChangePlayer,Itm}:{value:string,ChangePlayer:any,Itm:any}) => {
    const [newValue,setNewValue]=useState('')

  return (
   
    <div className={`border border-white md-sm:w-32 md-sm:h-32  xs:w-24 xs:h-24 w-16 h-16 sm:w-40  sm:h-40 bg-gray-300 hover:bg-gray-400 duration-500 flex justify-center items-center text-5xl `} onClick={()=>{setNewValue(value);ChangePlayer(Itm)}}>{Itm.Value}</div>
  )
}

export default Box