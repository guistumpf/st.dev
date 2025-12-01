'use client'

import { useState } from "react"
import "./index4.css"
import { useRouter } from "next/navigation"

export default function Conv(){

const [input,setinput] = useState<any>("")
const number = parseFloat(input)
const router = useRouter()


let valor =  (number - 32) * 5/9
  
let real: any = valor.toFixed(1) + "°C"

  if(input === ""){
  valor = NaN
  real = ""
  }


console.log(valor)
  return(
    <div className="bodyporra">

<a href="https://github.com/guistumpf/conversor-next" className="fonte">Código fonte</a>
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