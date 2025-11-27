
"use client"
import './index.css';
import Link from "next/link"
import {useRouter} from 'next/navigation';


import { useEffect, useState } from "react"
import { json } from 'stream/consumers';

export default function oi(){
  

  
  const [tarefas, settarefas] = useState<string[]>([])
  const [input, setinput] = useState<string>("")
  // 1. Nova variável para controlar se já carregou do banco
  const [primeiroCarregamento, setPrimeiroCarregamento] = useState(false) 
  const router = useRouter();
  
  // 2. useEffect de CARREGAR (Lê os dados ao abrir)
  useEffect(() => {
    const dados = localStorage.getItem("tarefas")
    if (dados) {
      settarefas(JSON.parse(dados))
    }
    setPrimeiroCarregamento(true) // Avisa que terminou de carregar
  }, [])

  // 3. useEffect de SALVAR (Só salva se já tiver carregado)
  useEffect(() => {
    if (primeiroCarregamento) { // A TRAVA: Se não carregou ainda, não salva nada!
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }
  }, [tarefas, primeiroCarregamento])

  // ... o resto das suas funções (add, excluir, return) continua igual ...
  
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
