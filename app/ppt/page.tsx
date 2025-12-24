'use client'
import { useState, useEffect } from "react";

export default function PPT() {
    const [esmaquina, setmaquina] = useState("")
const [escuser, setuser] = useState("")
const [resultado, setResultado] = useState("")

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
  // Só roda se ambos escolheram algo
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
    <>
    <h1>{esmaquina}</h1>
   <button onClick={() => jogar("✊")}>✊</button>
<button onClick={() => jogar("🤚")}>🤚</button>
<button onClick={() => jogar("✌️")}>✌️</button>
<h3>{resultado}</h3>
 </>
)

}