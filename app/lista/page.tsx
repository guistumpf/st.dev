
"use client"
import './index.css';
import Link from "next/link"
import {useRouter} from 'next/navigation';


import { useEffect, useState } from "react";

export default function oi(){
  
  const [tarefas,settarefas] = useState<any[]>([])
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
 


useEffect( ()=> {
  if (typeof window === 'undefined') return;
  localStorage.setItem('tarefas', JSON.stringify(tarefas) )
},[tarefas]
)


  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const saved = localStorage.getItem('tarefas');
      if (saved) settarefas(JSON.parse(saved));
    } catch (e) {
      console.warn('Failed to parse tarefas from localStorage', e);
    }
  }, []);


  

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
    <button onClick={add} className='add'>Add</button>
    <ul>
    {tarefas.map((tarefas:any) => (
      <li key={tarefas}>
        {tarefas}
      </li>
    ))}
    </ul>
  {tarefas.length > 0 &&(
    <button onClick={excluir} className='del'>Delete all</button>
  )}
    </section>
    </div>
    </>

  
)


}
