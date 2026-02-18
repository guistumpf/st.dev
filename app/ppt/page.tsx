'use client'
import { useState, useEffect } from "react";
import "./index5.css"
import { useRouter } from "next/navigation";
import Image from "next/image";
import "./pptlight.css"
import ReactCountryFlag from "react-country-flag";

export default function PPT() {
    const router = useRouter()

    //#region // Estados
    const [esmaquina, setmaquina] = useState("")
    const [escuser, setuser] = useState("")
    const [text, settext] = useState("")
    const [resultado, setResultado] = useState("")
    const [cor, setcor] = useState("")
    const [jguser, setdisplay] = useState("")
    const [jgma, setdisplaym] = useState("")
    const [bloqueado, setblock] = useState(false)
    const [vitorias, setvitorias] = useState(0)
    const [empates, setempates] = useState(0)
    const [derrotas, setderrotas] = useState(0)
    const [claro, setclaro] = useState(false);
    const [carregado, setCarregado] = useState(false); 
    
    // Estados de tradução
    const [titulo, settitulo] = useState("")
    const [pais, setpais] = useState("")
    const [sub, setsub] = useState("")
    const [display1, setdisplay1] = useState("")
    const [vitoria, setwin] = useState("")
    const [draw, setdraw] = useState("")
    const [lost, setlost] = useState("")
    const [vi, setvi] = useState("")
    const [em, setem] = useState("")
    const [der, setder] = useState("")
    const [placar, setplacar] = useState("")
    //#endregion

    // 1. CARREGAMENTO INICIAL (Idioma, Tema e Placar)
    // O [] garante que isso rode APENAS UMA VEZ ao abrir a página
    useEffect(() => {
        const idioma = localStorage.getItem("idioma")
        const salvoTema = localStorage.getItem("theme: ppt");
        const v = localStorage.getItem("vitorias");
        const d = localStorage.getItem("derrotas");
        const e = localStorage.getItem("empates");

        if (idioma === "english") {
            setdisplay1("You: "); setpais("US"); setsub("Machine: "); setwin("You Win!");
            setdraw("Draw"); setlost("You Lost!"); settitulo("Rock, Paper and Scissors");
            setvi("Wins: "); setem("Draws: "); setder("Losses: "); setplacar("Results");
            settext("Make your move!"); setResultado("Make your move!");
        } else {
            setpais("BR"); setsub("Máquina: "); setdisplay1("Você: "); setwin("Você venceu!");
            setdraw("Empate"); setlost("A máquina venceu!"); settitulo("Pedra, Papel e Tesoura");
            setvi("Vitórias: "); setem("Empates: "); setder("Derrotas: "); setplacar("Resultados");
            settext("Faça sua jogada!"); setResultado("Faça sua jogada!");
        }

        if (salvoTema) setclaro(salvoTema === "light");
        if (v) setvitorias(parseInt(v));
        if (d) setderrotas(parseInt(d));
        if (e) setempates(parseInt(e));

        setCarregado(true);
    }, []);

    // 2. CONTROLE DO TEMA (BODY CLASS)
    useEffect(() => {
        if (!carregado) return;
        document.body.classList.toggle("light", claro);
        localStorage.setItem("theme: ppt", claro ? "light" : "dark");
    }, [claro, carregado]);

    // 3. LÓGICA DO RESULTADO DO JOGO
    useEffect(() => {
        if (!escuser || !esmaquina) return;

        if (escuser === esmaquina) {
            setResultado(draw);
            setcor("grey");
            setempates(prev => {
                const novo = prev + 1;
                localStorage.setItem("empates", novo.toString());
                return novo;
            });
        } else if (
            (escuser === "✊" && esmaquina === "🤚") ||
            (escuser === "🤚" && esmaquina === "✌️") ||
            (escuser === "✌️" && esmaquina === "✊")
        ) {
            setResultado(lost);
            setcor("red");
            setderrotas(prev => {
                const novo = prev + 1;
                localStorage.setItem("derrotas", novo.toString());
                return novo;
            });
        } else {
            setResultado(vitoria);
            setcor("green");
            setvitorias(prev => {
                const novo = prev + 1;
                localStorage.setItem("vitorias", novo.toString());
                return novo;
            });
        }

        setdisplay(display1 + escuser);
        setdisplaym(sub + esmaquina);

        const timer = setTimeout(() => {
            setblock(false);
            setdisplay("");
            setdisplaym("");
            setcor("");
            setuser("");
            setmaquina("");
            setResultado(text);
        }, 2000);

        return () => clearTimeout(timer);
    }, [escuser, esmaquina, draw, lost, vitoria, display1, sub, text]);

    // 4. FUNÇÕES DE AÇÃO
    function jogar(escolhauser: any) {
        if (bloqueado) return
        setblock(true)
        setuser(escolhauser)
        
        const maquina = ['✌️', '✊', '🤚']
        const randomIdx = Math.floor(Math.random() * 3)
        setmaquina(maquina[randomIdx])
    }

    function reset() {
        if (confirm("Tem certeza que deseja resetar o placar?")) {
            localStorage.removeItem("vitorias")
            localStorage.removeItem("derrotas")
            localStorage.removeItem("empates")
            setvitorias(0)
            setderrotas(0)
            setempates(0)
        }
    }

    // 5. VARIÁVEIS DE IMAGEM
    const imagens = ['/light-mode-svgrepo-com (3).png', '/dark-mode-6682.png']
    const imagemAtual = claro ? imagens[1] : imagens[0];

  
    if (!carregado) return <div className="pptbody" style={{background: "#1a1a1a", height: "100vh"}} />;

    return (
        <div className="pptbody">
            <Image 
                src={imagemAtual} 
                alt="tema" 
                width={45} 
                height={45}
                onClick={() => setclaro(prev => !prev)} 
                className="tema" 
            />

            <img 
                src="klipartz.com.png" 
                alt="voltar" 
                className='back' 
                onClick={() => router.back()} 
            />
            
            <div className="pptdi">
                <h1 className="h1ppt">{titulo}</h1>
                <h2 style={{ color: cor }}>{resultado}</h2>

                <button disabled={bloqueado} onClick={() => jogar("✊")} className="pedra">✊</button>
                <button disabled={bloqueado} onClick={() => jogar("🤚")} className="papel">🤚</button>
                <button disabled={bloqueado} onClick={() => jogar("✌️")} className="tesoura">✌️</button>
                
                <h3 className="h32">{jgma}</h3>
                <h3 className="h32">{jguser}</h3>
            </div>

            <div className="placar">
                <p className="resu">{placar}</p>
                <p className="vit">{vi + vitorias}</p>
                <p className="del">{der + derrotas}</p>
                <p className="draw">{em + empates}</p>
                <button className="reseta" onClick={reset}>Reset 🔃</button>
            </div>

            <ReactCountryFlag svg countryCode={pais} className="pais"/> 
        </div>
    )
}