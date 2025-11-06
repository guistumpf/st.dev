"use client"
import './index.css';
import Link from "next/link"

import { useState } from "react"

export default function oi(){
 
 const [tarefas,settarefas] = useState<string[]>([])
const [input,setinput] = useState<string>("")

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
   <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
<div className='corpo'>

  <section className='Container'>
    <h1>Lista De Tarefas</h1>
    <input value={input} onChange={(e) => {
      setinput(e.target.value)
      console.log(e.target.value)
    }}></input>
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
