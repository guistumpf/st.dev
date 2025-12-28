'use client'

import { use, useState, useEffect } from "react"
import "./index6.css"
import { useRouter } from "next/navigation"

export default function Dados() {
    const [result, setresult] = useState("🎲")
    const [text, settext] = useState("Clique no botão para jogar!")
    const [bloqueado, setblock] = useState(false)
    const [historico, setHistorico] = useState<any>("Nenhuma jogada feita")
    const [carregado, setCarregado] = useState(false)
    const dados = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
    const router = useRouter()


    useEffect(() => {
        const salvo = localStorage.getItem("historico-dado")

        if (salvo) {
            setHistorico(JSON.parse(salvo))
        }

        setCarregado(true)
    }, [])

    useEffect(() => {
        if (!carregado) return

        localStorage.setItem(
            "historico-dado", JSON.stringify(historico))
    }, [historico, carregado])

    function random() {
        if (bloqueado) return
        setblock(true)

        const randoma = Math.floor(Math.random() * 6)
        const resultado = dados[randoma]
        const dadoreal = randoma + 1

        setHistorico(dadoreal)

        settext("Você tirou " + dadoreal + "!")
        setresult(resultado)
        console.log(resultado)

        setTimeout(() => {
            setblock(false)
            settext("Clique no botão para jogar!")
            setresult("🎲")
        }, 1700)

    }

    function limpa() {
        const confirmed = confirm("Tem certeza que deseja apagar o último número?")

        if (confirmed) {
            localStorage.removeItem("historico-dado")
            setHistorico("Nenhuma jogada feita")
        }
    }


    return (<>
        <div className="dadocorpo">

            <img src="klipartz.com.png" alt="voltar" className='back' onClick={() => router.back()} />
            <div className="dadodiv">
                <h1 className="dadotitulo" >Jogue o Dado!</h1>
                <h1 className="dadosra">{result}</h1>
                <button disabled={bloqueado} onClick={random} className="dadobut">Jogar o Dado</button>
                <p className="pdado">{text}</p>
            </div>
            <div className="historico">
                <h3 className="h3dado">Último Número</h3>
<p className="lastnumber">{historico}</p>
<button onClick={limpa}>Apagar ❌</button>
            </div>


        </div>

    </>
    )

}