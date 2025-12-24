'use client'
import { useState } from "react";

export default function PPT() {
    const [esmaquina, setmaquina] = useState(null)

    function random() {
        const maquina = ['✌️', '✊', '🤚']
        const escolha = Math.random() * 3
        const random = Math.floor(escolha)
        const escolhamaquina = maquina[random]
        console.log(escolhamaquina)
        return escolhamaquina
    }
    
    

return (
    <>
    <button onClick={random}>aaqa</button>
    </>
)

}