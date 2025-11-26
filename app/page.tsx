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
        <Link href={"/lista"}>Try this one!</Link>
        <h1>Sobre</h1>
        <h1>Suporte</h1>
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
            Clique na barrinha no canto superior esquerdo da página e veja meus projetos!
          </p>
        </div>
      </div>


    </>
  )

}