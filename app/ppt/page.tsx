'use client'
import { useState, useEffect } from "react";
import "./index5.css"

export default function PPT() {
    const [esmaquina, setmaquina] = useState("")
const [escuser, setuser] = useState("")
const [resultado, setResultado] = useState("Faça sua jogada!")

    function random() {
        const maquina = ['✌️', '✊', '🤚']
        const escolha = Math.random() * 3
        const random = Math.floor(escolha)
        const escolhamaquina = maquina[random]
        console.log(escolhamaquina)
        setmaquina(escolhamaquina)
    }
    

  
 function jogar(escolhauser: any){
setuser(escolhauser)
 random()

} 

useEffect(() => {
 
  if (!escuser || !esmaquina) return

  if (escuser === esmaquina) {
    setResultado("Empate")
  } else if (
    (escuser === "✊" && esmaquina === "🤚") ||
    (escuser === "🤚" && esmaquina === "✌️") ||
    (escuser === "✌️" && esmaquina === "✊")
  ) {
    setResultado("Você perdeu")
  } else {
    setResultado("Você venceu")
  }
}, [escuser, esmaquina])


console.log(escuser)
    
return (
    <div className="pptbody">

   <div className="pptdi">
   <h1 className="h1ppt">Pedra, Papel e Tesoura</h1>
   <h2>{resultado}</h2>

   <button onClick={() => jogar("✊")} className="pedra">✊</button>
<button onClick={() => jogar("🤚")} className="papel">🤚</button>
<button onClick={() => jogar("✌️")} className="tesoura">✌️</button>
<h3></h3>
   </div>
    </div>
 
)

}