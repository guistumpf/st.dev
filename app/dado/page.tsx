'use client'

import { use, useState, useEffect} from "react"
import "./index6.css"

export default function Dados(){
const [result, setresult] = useState("🎲")
const [text, settext] = useState("Clique no botão para jogar!")
 const [bloqueado, setblock] = useState(false) 
const [historico, setHistorico] = useState<number[]>([])
const [carregado, setCarregado] = useState(false) 
const dados =  ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]

useEffect(() => {
  const salvo = localStorage.getItem("historico-dado")

  if (salvo) {
    setHistorico(JSON.parse(salvo))
  }

  setCarregado(true)
}, [])

useEffect(() => {
  if (!carregado) return

  localStorage.setItem(
    "historico-dado",
    JSON.stringify(historico)
  )
}, [historico, carregado])

    function random (){
        if (bloqueado) return
           setblock(true)
        
    const randoma = Math.floor(Math.random() * 6)
    const resultado = dados[randoma] 
const dadoreal = randoma + 1

    setHistorico(prev => [...prev, dadoreal])

    settext("Você tirou " + dadoreal + "!")
    setresult(resultado)
    console.log(resultado)

setTimeout(() => {
    setblock(false)
    settext("Clique no botão para jogar!")
    setresult("🎲")
}, 1700)

}



return(
   <>
<div className="dadocorpo">

 <div className="dadodiv">
    <h1 className="dadotitulo" >Jogue o Dado!</h1>
  <h1 className="dadosra">{result}</h1>
    <button disabled={bloqueado} onClick={random} className="dadobut">Jogar o Dado</button>
    <p className="pdado">{text}</p>
    </div> 
<div className="historico">
  <h3 className="h3dado">Histórico:</h3>

  {historico.length === 0 ? (
    <p>Nenhuma jogada ainda</p>
  ) : (
    <ul className="uldado">
      {historico.map((item, index) => (
        <li key={index}>
          Jogada {index + 1}: {item}
        </li>
      ))}
    </ul>
  )}
</div>


</div>
   
    </>
)

}