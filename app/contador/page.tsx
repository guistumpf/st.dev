"use client"

import { use, useState } from "react"

export default function Contador(){

const [numero, setnumero] = useState<number>(0)


function add(){
    setnumero(numero + 1)
}

function minus(){
    setnumero(numero - 1)
}

function reset(){
    setnumero(0)
}


return(
    <section>
        <h1>Contador</h1>
        <p>{numero}</p>
        <button onClick={add}>mais</button>
        <button onClick={reset}>reset</button>
        <button onClick={minus}>menos</button>
    </section>
)


}