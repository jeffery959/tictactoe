"use client"
import { useEffect, useState } from "react";
import Box from "./Components/Box";

 const defaultGrid =[{MegaId:1,Id:1,Value:''},{MegaId:1,Id:2,Value:''},   {MegaId:1,Id:3,Value:''},{MegaId:2,Id:1,Value:''},{MegaId:2,Id:2,Value:''},  {MegaId:2,Id:3,Value:''},{MegaId:3,Id:1,Value:''},{MegaId:3,Id:2,Value:''},{MegaId:3,Id:3,Value:''}]
export default function Home() {
  const [value,setValue] =useState<''|'X'|'O'>('X')
  const [Win,setWin] =useState(false)
  const  [winMessage,setWinMessage]= useState([])
  const [selectedValues,setSelectedValues]=useState<any>({x:[],o:[]})
  const [gameBox,setGameBox] = useState(defaultGrid)
  const ChangeValue=()=>{
   
 if(value===''){
  setValue('X')
  return
}
if(value==='X'){
  setValue('O')
  return
}
setValue('')


  }


  const handleChossevalues=(Itm:any)=>{
    if(Itm.Value!=='' ){

      return
    }
 


    if(value==='X'){
      
      const NewSelectedValues = {...selectedValues,x:[...selectedValues.x,{...Itm,Value:value}]}
         setSelectedValues(NewSelectedValues)
    
        //Logic for wining
         selectedValues.x.forEach((element:any)=>{
          selectedValues.x.forEach((Jelement:any)=>{
          if(Jelement.MegaId===element.MegaId && element.MegaId===Itm.MegaId || Jelement.MegaId!==element.MegaId && element.MegaId!=Itm.MegaId && Jelement.MegaId!==Itm.MegaId){

            if( Jelement.MegaId!==element.MegaId && element.MegaId!=Itm.MegaId && Jelement.MegaId!==Itm.MegaId&&Jelement.Id!==element.Id&&element.Id!==Itm.Id&&Jelement.Id!==Itm.Id){
               if(Jelement.MegaId===2&&Jelement.Id!==2 || Jelement.Id===2&&Jelement.MegaId!==2){
                 return
               }
               if(element.MegaId===2&&element.Id!==2 || element.Id===2&&element.MegaId!==2){
                 
                 return
               }
              }
            if(Jelement.Id!==element.Id&&element.Id!==Itm.Id&&Jelement.Id!==Itm.Id||Jelement.Id===element.Id&&element.Id===Itm.Id){
              const newWinMessage:any = [...winMessage,{gameBox:gameBox,txt:"X has won"}]
            
              setWin(true)
              setWinMessage(newWinMessage)
           }
          }
          })
         })
        
    }
    if(value==='O'){
      const NewSelectedValues = {...selectedValues,o:[...selectedValues.o,{...Itm,Value:value}]}
         setSelectedValues(NewSelectedValues)

        //Logic for wining
        selectedValues.o.forEach((element:any)=>{
          selectedValues.o.forEach((Jelement:any)=>{
          if(Jelement.MegaId===element.MegaId && element.MegaId===Itm.MegaId || Jelement.MegaId!==element.MegaId && element.MegaId!=Itm.MegaId && Jelement.MegaId!==Itm.MegaId){

            if( Jelement.MegaId!==element.MegaId && element.MegaId!=Itm.MegaId && Jelement.MegaId!==Itm.MegaId&&Jelement.Id!==element.Id&&element.Id!==Itm.Id&&Jelement.Id!==Itm.Id){
               if(Jelement.MegaId===2&&Jelement.Id!==2 || Jelement.Id===2&&Jelement.MegaId!==2){
                 return
               }
               if(element.MegaId===2&&element.Id!==2 || element.Id===2&&element.MegaId!==2){
                 
                 return
               }
              }
            if(Jelement.Id!==element.Id&&element.Id!==Itm.Id&&Jelement.Id!==Itm.Id||Jelement.Id===element.Id&&element.Id===Itm.Id){
             console.log('O has won')
              const newWinMessage:any = [...winMessage,{...gameBox,txt:"O has won"}]
             setWin(true)
             
             setWinMessage(newWinMessage)
           }
          }
          })
         })
        
        
      }
      console.log(selectedValues)
    
  }
  const ChangePlayer=(Itm:any)=>{
 
    if(Win) return
    if(value==='X'&&Itm.Value===''){
      setValue('O')
      
    }
    else if(value==='O'&&Itm.Value===''){
      setValue('X')
    }

  const newGameBox = gameBox.map((itm)=>{
    if(Itm.MegaId===itm.MegaId&&Itm.Id===itm.Id&&Itm.Value===''){
      return {...itm,Value:value}
    }
    return itm
  })
  setGameBox(newGameBox)
  handleChossevalues(Itm)
}

  const Reset =()=>{
    setValue('X')
    setWin(false)
    setSelectedValues({x:[],o:[]})
    setGameBox(defaultGrid)
  }

  useEffect(()=>{
   
 
  },[value])
  return (
    <main className="flex min-h-screen w-screen border-red-950 flex-col items-center justify-center gap-20 p-24">
      
      <div className="  border rounded-2xl   items-center justify-center flex">
        <div className="rounded-3xl ">

        {
          gameBox.filter((itm)=>itm.MegaId===1).map((itm)=> <Box key={itm.Id} value={value} ChangePlayer={ChangePlayer} Itm={itm}/>    
          
          
          )
        }
       
        </div>
        <div className="">
        {
          gameBox.filter((itm)=>itm.MegaId===2).map((itm)=> <Box key={itm.Id} value={value} ChangePlayer={ChangePlayer} Itm={itm}/>    
          
          
          )
        }
       
        </div>
        <div className="">
        {
          gameBox.filter((itm)=>itm.MegaId===3).map((itm)=> <Box key={itm.Id} value={value} ChangePlayer={ChangePlayer} Itm={itm}/>    
          
          
          )
        }
     
        </div>

      </div>

      <div className=" flex flex-col sm:flex-row w-full items-center justify-center gap-5  border-gray-600">

      <button className="border rounded-md  h-8 flex justify-center items-center bg-red-600 sm:w-auto w-full hover:bg-red-400 duration-300 px-8 text-white" onClick={ChangeValue} >{value}</button>
      <button className="border rounded-md  h-8 flex justify-center items-center bg-blue-600 w-full sm:w-auto hover:bg-blue-400 duration-300 px-8 text-white" onClick={()=>Reset()}>Reset</button>

      <div className=" sm:w-60 sm:min-h-60 bg-white rounded-lg shadow-xl text-gray-600 w-full">
        <p className="font-bold w-full text-center pt-5">Wins</p>
        {winMessage.map((itm:any,key:any)=><p className="m-4 p-2 hover:bg-slate-200 rounded-md border-r-2 border-none duration-500" key={key}>{itm.txt}</p>)}
      </div>
   
      </div>
    </main>
  );
}
