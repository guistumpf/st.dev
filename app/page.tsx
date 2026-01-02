"use client"

import Link from "next/link";
import { useState } from "react";
import "./index2.css"
import "./responsivo.css"

export default function App() {

  const [menuaberto, setmenu] = useState<any>(false)



  let cor
  function mudarmenu() {
    setmenu(!menuaberto)
  }

  let classmenu = "menu-lateral"

  if (menuaberto) {
    classmenu = "menu-lateral aberto"
  }

  if (classmenu === "menu-lateral aberto") {
    cor = "pink"
  }




  return (
    <>
      <link rel="icon" href="/e1497514ab168e36120bb64668dbc7af.ico" sizes="any" />
      <button className={`hamburguer ${menuaberto && 'aberto'}`} onClick={mudarmenu}>
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </button>

      <nav className={classmenu}>
        <Link href={"/lista"} className="navtext">Lista de Tarefas</Link>
        <Link href={"/contador"} className="navtext">Contador</Link>
        <Link href={"/conversor"} className="navtext">Conversor</Link>
        <Link href={"/ppt"} className="navtext">PPT</Link>
        <Link href={"/dado"} className="navtext">Role um dado</Link>
        <h1 className="navtext"></h1>
        <h1 className="contato">Redes Sociais</h1>
        <div className="box-icones">

          <a href="https://github.com/guistumpf">
            <h1 className="navigit"><img src="pngegg(1).png" alt="github" className="github" /></h1>

          </a>
          <a href="https://wa.me/qr/BCLRCFVD5KQNH1">
            <h1 className="zap"><img src="—Pngtree—white whatsapp icon png vector_3562063.png" alt="" className="zapfoda" /></h1>
          </a>
          <a href="https://vercel.com/guistumpf">
            <h1 className="vercelnav"><img src="Vercel_Symbol_1.png" alt="vercel" className="vercel" /></h1>
          </a>
        </div>
      </nav>


      <section>
        <h1 className="head">st.dev</h1>
      </section>
      <div className="hero">
        <img src="/ellie.gif" alt="something" className="kanye" />
        <div className="hero-text">
          <h1 className="subtitulo">Bem-Vindo!</h1>
          <p className="texto">Olá! Meu nome é João e eu venho estudando desenvolvimento de sistemas
            a algum tempo e recentemente eu tive a ideia de criar esse site para armazenar meus projetos e ideias.

          </p>
          <p className="texto">
            Sinta-se livre para testar e acompanhar minha jornada conforme meus conhecimentos vão se expandindo na área!
          </p>
          <span></span>
          <span></span>
          <span></span>
          <p className="texto2">
            Clique na barrinha no canto superior esquerdo da página e teste meus projetos!

          </p>
          <p className="texto3">
            *Todos os projetos (e esse site) são um WIP
          </p>
          <p className="sopc" >*Se o site ficar desalinhado tenta colocar 75% na lupa do pc</p>
        </div>
      </div>

      <a href="https://github.com/guistumpf/st.dev" className='fonte'>Código Fonte</a>
    </>
  )

}