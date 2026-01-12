
"use client"
import './index.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"
import Image from 'next/image';
import "./clarolist.css"
export default function oi() {

  const [tarefas, settarefas] = useState<string[]>([])
  const [input, setinput] = useState<string>("")
  const [primeiroCarregamento, setPrimeiroCarregamento] = useState(false)
  const router = useRouter();
  const[claro, setclaro] = useState(false)
const [carregado, setCarregado] = useState(false);


useEffect(() => {
  const salvo = localStorage.getItem("theme: lista");
  if (salvo) {
    setclaro(salvo === "light");
  }
  setCarregado(true);
}, []);


useEffect(() => {
  if (!carregado) return;

  document.body.classList.toggle("light", claro);
  localStorage.setItem("theme: lista", claro ? "light" : "dark");
}, [claro, carregado]);

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

const dados: any = {
  text: input, 
  id: Date.now()
}


    settarefas([...tarefas, dados])
    setinput("")

  }

  function excluir() {
    const confirmed = confirm("Tem certeza que deseja apagar tudo?")

    if (confirmed) {
      settarefas([])
    }
  }

  function ex({ index }: { index: number; }) {
    const novas = tarefas.filter((_, i) => i !== index)

    settarefas(novas)
  }

  const imagens = [
  '/light-mode-svgrepo-com (3).png',
  '/dark-mode-6682.png'
]


const imagemAtual = claro ? imagens[1] : imagens[0]

  return (
    <>


      <div className='corpo1'>
<Image 
src={imagemAtual}
width={45}
height={45}
alt="a"
onClick={() => setclaro(prev => !prev)}
className='tema'
/>

        <img src="klipartz.com.png" alt="voltar" className='back' onClick={() => router.back()} />
        <section className='Container'>
          <h1>Lista De Tarefas</h1>
          <input value={input} onChange={(e) => {
            setinput(e.target.value)
            console.log(e.target.value)
          }} placeholder='Digite Uma Tarefa!'></input>
          <button onClick={add} className='add' title='Adicionar tarefa'>Add</button>
          <ul>
            {tarefas.map((tarefas: any, index) => (
              <li key={tarefas.id} className='li'>
                {tarefas.text}
                <button className='btnex' onClick={() => ex({ index })} title='Excluir tarefa'>X</button>
              </li>
            ))}
          </ul>
          {tarefas.length > 1 && (
            <button onClick={excluir} className='del' title='Apagar Lista'>🗑️</button>
          )}
        </section>
      </div>
    </>


  )


}
