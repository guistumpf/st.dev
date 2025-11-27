"use client"

import Link from "next/link";
import { use, useState } from "react";
import "./index2.css"

export default function App() {

  const [menuaberto, setmenu] = useState<any>(false)




  function mudarmenu() {
    setmenu(!menuaberto)
  }

  let classmenu = "menu-lateral"

  if (menuaberto) {
    classmenu = "menu-lateral aberto"
  }


  return (
    <>

      <button className="hamburguer" onClick={mudarmenu}>
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </button>

      <nav className={classmenu}>

        <Link href={"/lista"} className="navtext">Lista de Tarefas</Link>
        <Link href={"/contador"} className="navtext">Contador</Link>
        <h1 className="navtext">Suporte</h1>
        <h1 className="contato">Redes Sociais</h1>
        <a href="https://github.com/guistumpf">
          <h1 className="navigit"><img src="pngegg(1).png" alt="github" className="github" /></h1>
      
      </a>
      <a href="https://wa.me/qr/BCLRCFVD5KQNH1">
          <h1 className="zap"><img src="—Pngtree—white whatsapp icon png vector_3562063.png" alt="" className="zapfoda" /></h1>
      </a>
      <a href="https://www.instagram.com/gui.st0/">
        <h1 className="instanav"><img src="pngegg.png" alt="insta" className="insta"/></h1>
      </a>
    </nav>
         

      <section>
        <h1 className="head">Meus Sites</h1>
      </section>
      <div className="hero">
        <img src="/image1.png" alt="something" className="kanye" />
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
        </div>
      </div>


    </>
  )

}