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

    
    </>
  )

}