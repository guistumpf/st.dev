
"use client"
import './index.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"

export default function oi() {

  const [tarefas, settarefas] = useState<string[]>([])
  const [input, setinput] = useState<string>("")
  const [primeiroCarregamento, setPrimeiroCarregamento] = useState(false)
  const router = useRouter();


  useEffect(() => {
    const dados = localStorage.getItem("tarefas")
    if (dados) {
      settarefas(JSON.parse(dados))
    }
    setPrimeiroCarregamento(true)
  }, [])

  
  useEffect(() => {
    if (primeiroCarregamento) {
      localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }
  }, [tarefas, primeiroCarregamento])

  function add() {
    if (input.trim() === "") {
      alert("Digite Uma Tarefa")
      return
    }

    settarefas([...tarefas, input])
    setinput("")

  }

  function excluir() {
    const confirmed = confirm("Tem certeza que deseja apagar tudo?")

    if (confirmed) {
      settarefas([])
    }
  }

  return (
    <>

      <div className='corpo'>

          
         <img src="klipartz.com.png" alt="voltar" className='back' onClick={() => router.back()}/> 
<a href="https://github.com/guistumpf/lista-next" className='fonte'>Código Fonte</a>
        <section className='Container'>
          <h1>Lista De Tarefas</h1>
          <input value={input} onChange={(e) => {
            setinput(e.target.value)
            console.log(e.target.value)
          }} placeholder='Digite Uma Tarefa!'></input>
          <button onClick={add} className='add'>Add</button>
          <ul>
            {tarefas.map((tarefas: any) => (
              <li key={tarefas}>
                {tarefas}
              </li>
            ))}
          </ul> 
            {tarefas.length > 0 && (
              <button onClick={excluir} className='del'>Limpar 🗑️</button>
            )}
        </section>
      </div>
    </>


  )


}
