"use client"

import Link from "next/link";
import { use, useState } from "react";
import "./index2.css"

export default function App() {

  const [numero, setnumero] = useState<number>(0)

  let cor

  function mais(): void {
    setnumero(numero + 1)
  }
  function menos(): void {
    setnumero(numero - 1)

  }

  if (numero > 0) {
    cor = "green"
  } else if (numero < 0) {
    cor = "red"
  } else (
    cor = ""
  )





  return (
    <>
    <section>
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"></meta>
      <h1>Contador</h1>
      <p style={{ color: cor }}>{numero}</p>
      <button onClick={menos}>menos</button>
      <button onClick={mais}>mais</button>

</section>

      <Link href={"/lista"} className="meowl">Try this one!</Link>


    </>
  )

}