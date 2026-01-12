"use client"
import { useRouter } from "next/navigation"
import "./index3.css"
import { use, useEffect, useState } from "react"
import Image from "next/image"
import "./clarocont.css"

export default function Contador() {

    const [numero, setnumero] = useState<number>(0)
    const router = useRouter();
    const [carregado, setCarregado] = useState(false);
    const [claro, setclaro] = useState(false);
    const [carregadot, setCarregadot] = useState(false);
    const STORAGE_KEY = "theme:contador";


    useEffect(() => {
        const salvo = localStorage.getItem(STORAGE_KEY);
        if (salvo) {
            setclaro(salvo === "light");
        }
        setCarregadot(true);
    }, []);


    useEffect(() => {
        if (!carregadot) return;

        document.body.classList.toggle("light", claro);
        localStorage.setItem(STORAGE_KEY, claro ? "light" : "dark");
    }, [claro, carregadot]);

    let cor

    useEffect(() => {
        if (carregado) {
            localStorage.setItem("numero", numero.toString())
        }
    },
        [numero, carregado])

    useEffect(() => {
        const salvo = localStorage.getItem("numero")
        if (salvo !== null) {
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


    const imagens = [
        '/light-mode-svgrepo-com (3).png',
        '/dark-mode-6682.png'
    ]

   const imagemAtual = claro ? imagens[1] : imagens[0];

    return (
        <>

            <div className="corpo2">
                <Image src={imagemAtual}
                    alt="pi"
                    width={45}
                    height={45} style={{ cursor: "pointer" }}
                    onClick={() => setclaro(prev => !prev)}
                    className="tema" />

                <section className="section">
                    <h1 className="titulo">Contador</h1>
                    <p style={{ color: cor }} className="numero">{numero}</p>
                    <button onClick={add} className="porrinha" title="Adicionar">➕</button>
                    <button onClick={reset} className="porrinha" title="Resetar">🔃</button>
                    <button onClick={minus} className="porrinha" title="Diminuir">➖</button>
                </section>
                <img src="klipartz.com.png" alt="voltar" className='back1' onClick={() => router.back()} />
            </div>
        </>
    )


}