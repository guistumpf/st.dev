'use client'
import { useState, useEffect } from "react";
import "./index5.css"
import { useRouter } from "next/navigation";

export default function PPT() {
    // Estados
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


    const router = useRouter()

    useEffect(() => {
        const v = localStorage.getItem("vitorias");
        const d = localStorage.getItem("derrotas");
        const e = localStorage.getItem("empates");

        if (v) setvitorias(parseInt(v));
        if (d) setderrotas(parseInt(d));
        if (e) setempates(parseInt(e));
    }, []);


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

        //aparentemente tem algum bug acontecendo nesse setTimeout
        setTimeout(() => {
            setblock(false)
            setdisplay("")
            setdisplaym("")
            setcor("")
            setResultado("Faça sua jogada!")

        }, 2000)



        console.log(setTimeout)

    }

    useEffect(() => {

        if (!escuser || !esmaquina) return

        if (escuser === esmaquina) {
            setResultado("Empate")
            setcor("grey")
            const totalempates = empates + 1
            setempates(totalempates)
            localStorage.setItem("empates", totalempates.toString())
        } else if (
            (escuser === "✊" && esmaquina === "🤚") ||
            (escuser === "🤚" && esmaquina === "✌️") ||
            (escuser === "✌️" && esmaquina === "✊")
        ) {
            setResultado("A máquina venceu!")
            setcor("red")
            const totalderrotas = derrotas + 1
            setderrotas(totalderrotas)
            localStorage.setItem("derrotas", totalderrotas.toString())
        } else {
            setResultado("Você venceu!")
            setcor("green")
            const totalvitorias = vitorias + 1
            setvitorias(totalvitorias)
            localStorage.setItem("vitorias", totalvitorias.toString())
        }
        setdisplay("Você:" + escuser)
        setdisplaym("Máquina:" + esmaquina)
    }, [escuser, esmaquina])


    function reset() {
        const confirmed = confirm("Tem certeza que deseja resetar o placar?")


        if (confirmed) {
            localStorage.removeItem("vitorias")
            localStorage.removeItem("derrotas")
            localStorage.removeItem("empates")
            setvitorias(0)
            setderrotas(0)
            setempates(0)
        }
    }

    console.log(escuser)

    return (
        <div className="pptbody">

            <img src="klipartz.com.png" alt="voltar" className='back' onClick={() => router.back()} />
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