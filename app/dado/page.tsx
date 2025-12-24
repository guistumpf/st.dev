'use client'

import { use, useState } from "react"
import "./index6.css"

export default function Dados(){
const [result, setresult] = useState("🎲")
const [text, settext] = useState("Clique no botão para jogar!")
 const [bloqueado, setblock] = useState(false) 
const dados =  ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]

    function random (){
        
    const randoma = Math.floor(Math.random() * 6)
    const resultado = dados[randoma]
        
    settext("Você tirou " + randoma + "!")
    setresult(resultado)
    console.log(resultado)
}


return(
   <>
<div className="dadocorpo">

 <div className="dadodiv">
    <h1 className="dadotitulo">Jogue o Dado!</h1>
  <h1 className="dadosra">{result}</h1>
    <button onClick={random} className="dadobut">Jogar o Dado</button>
    <p className="pdado">{text}</p>
    </div> 
</div>
   
    </>
)

}