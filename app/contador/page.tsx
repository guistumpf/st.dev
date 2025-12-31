"use client"
import { useRouter } from "next/navigation"
import "./index3.css"
import { use, useEffect, useState } from "react"

export default function Contador() {

    const [numero, setnumero] = useState<number>(0)
const router = useRouter();
const [carregado, setCarregado] = useState(false);

    let cor
    
    useEffect(() => {
       if(carregado){
           localStorage.setItem("numero", numero.toString())
        }
    }, 
[numero, carregado])
    
useEffect(() =>{
    const salvo = localStorage.getItem("numero")
if(salvo !== null ){
    setnumero(+salvo)
}
setCarregado(true)
}, [])

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
                    <button onClick={add} className="porrinha" title="Adicionar">➕</button>
                    <button onClick={reset} className="porrinha" title="Resetar">🔃</button>
                    <button onClick={minus} className="porrinha" title="Diminuir">➖</button>
                </section>
   <img src="klipartz.com.png" alt="voltar" className='back1' onClick={() => router.back()}/>
            </div>
        </>
    )


}