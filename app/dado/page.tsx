'use client'

import { use, useState } from "react"

export default function Dados(){
const [result, setresult] = useState("🎲")
const dados =  ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]

    function random (){
        
    const randoma = Math.floor(Math.random() * 6)
    const resultado = dados[randoma]
        setresult(resultado)

    console.log(resultado)
}


return(
    <> 
  <h1>{result}</h1>
    <button onClick={random}>oioi</button>
    </>
)

}