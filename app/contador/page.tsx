"use client"
import { useRouter } from "next/navigation"
import "./index3.css"
import { use, useState } from "react"

export default function Contador() {

    const [numero, setnumero] = useState<number>(0)
const router = useRouter();


    let cor

    function add() {
        setnumero(numero + 1)
    }

    function minus() {
        setnumero(numero - 1)
    }

    function reset() {
        setnumero(0)
    }

    if (numero > 0) {
        cor = "green"
    } else if (numero < 0) {
        cor = "red"
    }



    return (
        <>

            <div className="corpo2">

                <section className="section">
                    <h1 className="titulo">Contador</h1>
                    <p style={{ color: cor }} className="numero">{numero}</p>
                    <button onClick={add} className="porrinha">➕</button>
                    <button onClick={reset} className="porrinha">🔃</button>
                    <button onClick={minus} className="porrinha">➖</button>
                </section>
   <img src="klipartz.com.png" alt="voltar" className='back1' onClick={() => router.back()}/>
            </div>
        </>
    )


}