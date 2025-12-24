'use client'
import { useState, useEffect } from "react";
import "./index5.css"

export default function PPT() {
    const [esmaquina, setmaquina] = useState("")
    const [escuser, setuser] = useState("")
    const [resultado, setResultado] = useState("Faça sua jogada!")
    const [cor, setcor] = useState("")
    const [jguser, setdisplay] = useState("")
    const [jgma, setdisplaym] = useState("")
    const [bloqueado, setblock] = useState(false)
    const [vitorias, setvitorias] = useState(0)
    const [empates, setempates] = useState(0)
    const [derrotas, setderrotas] = useState(0)

    function random() {
        const maquina = ['✌️', '✊', '🤚']
        const escolha = Math.random() * 3
        const random = Math.floor(escolha)
        const escolhamaquina = maquina[random]
        console.log(escolhamaquina)
        setmaquina(escolhamaquina)
    }



    function jogar(escolhauser: any) {
        if (bloqueado) return
        setblock(true)

        setuser(escolhauser)
        random()

        setTimeout(() => {
            setblock(false)
            setdisplay("")
            setdisplaym("")
            setcor("")
            setResultado("Faça sua jogada!")

        }, 1350)

    }

    useEffect(() => {

        if (!escuser || !esmaquina) return

        if (escuser === esmaquina) {
            setResultado("Empate")
            setcor("grey")
            setempates(empates + 1)
        } else if (
            (escuser === "✊" && esmaquina === "🤚") ||
            (escuser === "🤚" && esmaquina === "✌️") ||
            (escuser === "✌️" && esmaquina === "✊")
        ) {
            setResultado("A máquina venceu!")
            setcor("red")
            setderrotas(derrotas + 1)

        } else {
            setResultado("Você venceu!")
            setcor("green")
            setvitorias(vitorias + 1)
        }
        setdisplay("Você:" + escuser)
        setdisplaym("Máquina:" + esmaquina)
    }, [escuser, esmaquina])


    function reset() {
      const confirmed = confirm("Tem certeza que deseja resetar o placar?")
      
      if(confirmed){
        setvitorias(0)
        setderrotas(0)
        setempates(0)
      }
    }




    console.log(escuser)

    return (
        <div className="pptbody">

            <div className="pptdi">
                <h1 className="h1ppt">Pedra, Papel e Tesoura</h1>
                <h2 style={{ color: cor }} >{resultado}</h2>

                <button disabled={bloqueado} onClick={() => jogar("✊")} className="pedra">✊</button>
                <button disabled={bloqueado} onClick={() => jogar("🤚")} className="papel">🤚</button>
                <button disabled={bloqueado} onClick={() => jogar("✌️")} className="tesoura">✌️</button>
                <h3 className="h32">{jgma}</h3>
                <h3 className="h32">{jguser}</h3>
            </div>

            <div className="placar">
                <p className="resu">Resultados</p>
                <span> </span>
                <p className="vit">Vitórias: {vitorias}</p>
                <p className="del">Derrotas: {derrotas}</p>
                <p className="draw">Empates: {empates}</p>
<button className="reseta" onClick={reset}>Reset 🔃</button>
            </div>
        </div>

    )

}