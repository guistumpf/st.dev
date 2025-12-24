'use client'
import { useState } from "react";

export default function PPT() {
    const [esmaquina, setmaquina] = useState("")
const [escuser, setuser] = useState("")

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
 

} 

if(escuser === "✊" && esmaquina === "✌️" ){
    alert("voce venceu")
}

console.log(escuser)
    
return (
    <>
    <h1>{esmaquina}</h1>
   <button onClick={() => jogar("✊")}>✊</button>
<button onClick={() => jogar("🤚")}>🤚</button>
<button onClick={() => jogar("✌️")}>✌️</button>

 </>
)

}