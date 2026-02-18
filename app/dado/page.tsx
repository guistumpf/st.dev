'use client'

import { use, useState, useEffect } from "react"
import "./index6.css"
import { useRouter } from "next/navigation"
import Image from "next/image"
import "./dadoclaro.css"
import ReactCountryFlag from "react-country-flag"

export default function Dados() {
 
    
    const [result, setresult] = useState("🎲")
    const [bloqueado, setblock] = useState(false)
    const [claro, setclaro] = useState(false)
    const [carregado, setCarregado] = useState(false);
const [titulo, settitulo] = useState("")
const [pais, setpais] = useState("") 
const [sub, setsub] = useState("")
const [button, setbutton] = useState("")
const [resultext, setresul] = useState("")

 



useEffect(() => {
  const salvo = localStorage.getItem("theme: dado");
  if (salvo) {
    setclaro(salvo === "light");
  }
  setCarregado(true);
}, []);

useEffect(() => {
  if (!carregado) return;

  document.body.classList.toggle("light", claro);
  localStorage.setItem("theme: dado", claro ? "light" : "dark");
}, [claro, carregado]);

    const dados = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
   const router = useRouter()

    function random() {
        if (bloqueado) return
        setblock(true)

        const randoma = Math.floor(Math.random() * 6)
        const resultado = dados[randoma]
        const dadoreal = randoma + 1

        setresult(resultado)
        console.log(resultado)

        setTimeout(() => {
            setblock(false)
          
            setresult("🎲")
        }, 1700)
    }

const imagens = [
  '/light-mode-svgrepo-com (3).png',
  '/dark-mode-6682.png'
]

const imagemAtual =  claro ? imagens[1] : imagens[0]

    return (<>
        <div className="dadocorpo">
<Image
src={imagemAtual}
width={45}
height={45}
alt="tema"
onClick={() => setclaro(prev => !prev)}
className="tema"
/>
            <img src="klipartz.com.png" alt="voltar" className='back' onClick={() => router.back()} />
            <div className="dadodiv">
                <h1 className="dadotitulo" >{titulo}</h1>
                <h1 className="dadosra">{result}</h1>
                <button disabled={bloqueado} onClick={random} className="dadobut" title="Jogar!">{sub}</button>
                <p className="pdado"></p>
            </div>


<ReactCountryFlag  countryCode={pais} className="pais" svg/>

        </div>

    </>
    )

}