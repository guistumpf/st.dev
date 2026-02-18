
"use client"
import './index.css';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react"
import Image from 'next/image';
import "./clarolist.css"
import ReactCountryFlag from 'react-country-flag';
export default function oi() {

  const [tarefas, settarefas] = useState<string[]>([])
  const [input, setinput] = useState<string>("")
  const [primeiroCarregamento, setPrimeiroCarregamento] = useState(false)
  const router = useRouter();
  const[claro, setclaro] = useState(false)
const [carregado, setCarregado] = useState(false);
const [titulo, settitulo] = useState("")
const [placeholder, setplace] = useState("")
const [pais, setpais] = useState("")
const [aviso,setaviso] = useState("")
const [avisoadd, setadd] = useState("")


useEffect(() => {
    const idioma = localStorage.getItem("idioma")
if(idioma === "english"){
    settitulo("To do list")
    setpais ("US")
    setplace("Write a task!")
    setaviso("Are you sure you want to clear all tasks?")
setadd("Write a task")
} else {
    settitulo("Lista de tarefas")
setpais("BR")
setplace("Escreva uma tarefa!")
setaviso("Tem certeza que deseja apagar tudo?")
setadd("Digite uma tarefa")
}
})

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
    alert(avisoadd)
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
    const confirmed = confirm(aviso)

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
          <h1>{titulo}</h1>
          <input value={input} onChange={(e) => {
            setinput(e.target.value)
            console.log(e.target.value)
          }} placeholder={placeholder}></input>
          <button onClick={add} className='add' >Add</button>
          <ul>
            {tarefas.map((tarefas: any, index) => (
              <li key={tarefas.id} className='li'>
                {tarefas.text}
                <button className='btnex' onClick={() => ex({ index })} >X</button>
              </li>
            ))}
          </ul>
          {tarefas.length > 1 && (
            <button onClick={excluir} className='del' >🗑️</button>
          )}
        </section>
      <ReactCountryFlag countryCode={pais} svg className='pais'/>
      </div>
    </>


  )


}
