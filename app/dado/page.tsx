'use client'

import { use, useState, useEffect } from "react"
import "./index6.css"
import { useRouter } from "next/navigation"
import Image from "next/image"
import "./dadoclaro.css"

export default function Dados() {
    const [result, setresult] = useState("🎲")
    const [text, settext] = useState("Clique no botão para jogar!")
    const [bloqueado, setblock] = useState(false)
    const [claro, setclaro] = useState(false)
    const [carregado, setCarregado] = useState(false);


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

        settext("Você tirou " + dadoreal + "!")
        setresult(resultado)
        console.log(resultado)

        setTimeout(() => {
            setblock(false)
            settext("Clique no botão para jogar!")
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
                <h1 className="dadotitulo" >Jogue o Dado!</h1>
                <h1 className="dadosra">{result}</h1>
                <button disabled={bloqueado} onClick={random} className="dadobut" title="Jogar!">Jogar o Dado</button>
                <p className="pdado">{text}</p>
            </div>


        </div>

    </>
    )

}