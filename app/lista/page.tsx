
"use client"
import './index.css';
import Link from "next/link"
import {useRouter} from 'next/navigation';


import { useState } from "react"

export default function oi(){
  
  const [tarefas,settarefas] = useState<string[]>([])
  const [input,setinput] = useState<string>("")
  const router = useRouter();
  
  function add(){
    if(input.trim() === ""){
      alert("Digite Uma Tarefa")
      return
    }
    
    settarefas([...tarefas,input])
    setinput("")
    
  }
  
  function excluir(){
    const confirmed = confirm("Tem certeza que deseja apagar tudo?")
    
    if(confirmed){
      settarefas([])
    }
  }
 

  

return(
 <>
   
<div className='corpo'>

  <section className='Container'>
    <button onClick={() => router.back()}>Go Back</button>
    <h1>Lista De Tarefas</h1>
    <input value={input} onChange={(e) => {
      setinput(e.target.value)
      console.log(e.target.value)
    }} placeholder='Digite Uma Tarefa!'></input>
    <button onClick={add}>Add</button>
    <ul>
    {tarefas.map((tarefas:any) => (
      <li key={tarefas}>
        {tarefas}
      </li>
    ))}
    </ul>
  {tarefas.length > 0 &&(
    <button onClick={excluir}>Delete all</button>
  )}
    </section>
    </div>
    </>

  
)


}
