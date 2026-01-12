'use client'

import { useState, useEffect } from "react"
import "./index4.css"
import { useRouter } from "next/navigation"
import Image from "next/image"
import "./claroconv.css"


export default function Conv(){
const [claro, setclaro] = useState(false)
const [input,setinput] = useState<any>("")
const number = parseFloat(input)
const router = useRouter()
const [carregado, setCarregado] = useState(false);


useEffect(() => {
  const salvo = localStorage.getItem("theme: conversor");
  if (salvo) {
    setclaro(salvo === "light");
  }
  setCarregado(true);
}, []);


useEffect(() => {
  if (!carregado) return;

  document.body.classList.toggle("light", claro);
  localStorage.setItem("theme: conversor", claro ? "light" : "dark");
}, [claro, carregado]);

let valor =  (number - 32) * 5/9
  
let real: any = valor.toFixed(1) + "°C"

  if(input === ""){
  valor = NaN
  real = ""
  }
  
  const imagens = [
  '/light-mode-svgrepo-com (3).png',
  '/dark-mode-6682.png'
]

const imagemAtual = claro ? imagens[1] : imagens[0];

console.log(valor)
  return(
    <div className="bodyporra">
<Image
src={imagemAtual}
width={45}
height={45}
alt="tema"
onClick={() => setclaro(prev => !prev)}
className="tema"
/>
  <img src="klipartz.com.png" alt="voltar" className='back' onClick={() => router.back()}/> 
    <section className="caixaconv">
      <h1 className="conv">Conversor de temperaturas</h1>
      <p className="sub">Converta °F para °C</p>
      <input type="number" onChange={(e) => {
        setinput(e.target.value) 
      }} className="val" placeholder="°F" />
      <p className="rel">Celsius: {real}</p>
    </section>
      </div>
  )
}