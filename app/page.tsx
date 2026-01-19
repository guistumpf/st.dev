"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import "./index2.css"
import "./responsivo.css"
import Image from "next/image"
import "./claro.css"
import {  Dropdown,  DropdownTrigger,  DropdownMenu,  DropdownSection,  DropdownItem} from "@heroui/dropdown";
import {Button, ButtonGroup} from "@heroui/button";
import ReactCountryFlag from "react-country-flag";

export default function App() {

  const [menuaberto, setmenu] = useState<any>(false)
const [claro, setclaro] = useState(false);
const [carregado, setCarregado] = useState(false);
const [ingles, setingles] = useState(false)

let Tarefas
let dado
let contador
let ppt 
let conversor

const texto3 = ingles
  ? "*All the apps (and this website) are a WIP"
  : "*Todos os projetos (e esse site) são um WIP"

const titulo = ingles
? "Welcome!"
: "Bem-Vindo!"

const buttontext = ingles
? "Language"
: "Idioma"

const idioma1 = ingles
? "English"
: "Inglês"
 
const idioma2 = ingles
?"Portuguese"
:"Português"

if(ingles){
  Tarefas = "To do list"
  contador = "Counter"
  dado = "Roll the dice"
  ppt = "RPS"
  conversor = "Fahrenheit Converter"
} else{
  Tarefas = "Lista de Tarefas"
  contador = "Contador"
  dado = "Role um dado"
ppt = "PPT"
conversor = "Conversor"
}

const texto1 = ingles 
?"Hi! My name is João and i have been studying software development for some time and recently i had the idea to create this website to store my project and ideas."
:"Olá! Meu nome é João e eu venho estudando desenvolvimento de sistemas a algum tempo e recentemente eu tive a ideia de criar esse site para armazenar meus projetos e ideias."

const text2 = ingles
?"Feel free to test and follow my journey as my knowledge expands!"
:"Sinta-se livre para testar e acompanhar minha jornada conforme meus conhecimentos vão se expandindo na área!"

const texto2meio = ingles
?"Click on the bar in the upper left corner of the page and test my projects!"
:"Clique na barrinha no canto superior esquerdo da página e teste meus projetos!"

const redes = ingles
?"Social Media"
:"Redes Sociais"

useEffect(() => {
  const salvo = localStorage.getItem("theme");
  if (salvo) {
    setclaro(salvo === "light");
  }
  setCarregado(true);
}, []);


useEffect(() => {
  if (!carregado) return;

  document.body.classList.toggle("light", claro);
  localStorage.setItem("theme", claro ? "light" : "dark");
}, [claro, carregado]);


const imagens = [
  '/light-mode-svgrepo-com (3).png',
  '/dark-mode-6682.png'
]

const imagenstela = [
  "/ellie.gif",
'/3906a67b32828494b57d6769194976af (1).png'
]

const imagemAtual1 = claro ? imagenstela[1] : imagenstela[0];
const imagemAtual = claro ? imagens[1] : imagens[0];


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


console.log(claro)
console.log(ingles)
  return (
    <>
 <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
      <link rel="icon" href="/e1497514ab168e36120bb64668dbc7af.ico" sizes="any" />
      <button className={`hamburguer ${menuaberto && 'aberto'}`} onClick={mudarmenu}>
        <span className="linha"></span>
        <span className="linha"></span>
        <span className="linha"></span>
      </button>

      <nav className={classmenu}>
        <Link href={"/lista"} className="navtext">{Tarefas}</Link>
        <Link href={"/contador"} className="navtext">{contador}</Link>
        <Link href={"/conversor"} className="navtext">{conversor}</Link>
        <Link href={"/ppt"} className="navtext">{ppt}</Link>
        <Link href={"/dado"} className="navtext">{dado}</Link>
        <h1 className="navtext"></h1>
        <h1 className="contato">{redes}</h1>
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
        
        <a href="https://github.com/guistumpf/st.dev" className="codigofonte">
          <h1 className="contato1"><img src="/code-48.png" alt="something" className="iconfont"/></h1>
        
          </a>
        </div>
      </nav>

  

      <section>
        <h1 className="head">st.dev</h1>
    <Image  src={imagemAtual}
    alt="pi"
    width={45}
    height={45}
 onClick={() => setclaro(prev => !prev)}
    className="tema"/>
    
      </section>
      <div className="hero">
        <Image
        src={imagemAtual1}
        width={300}
        height={350}
        alt="blabla"
        className="kanye"
        />
        <div className="hero-text">
          <h1 className="subtitulo">{titulo}</h1>
          <p className="texto">
          {texto1}
          </p>
          <p className="textosecundario">
           {text2}
          </p>
          <span></span>
          <span></span>
          <span></span>
          <p className="texto2" >
            {texto2meio}
          </p>
          <p className="texto3">
            {texto3}
          </p>
         
        </div>
      </div>
    <div className="lingua">

 <Dropdown >
      <DropdownTrigger>
        <Button variant="bordered" className="heroui-btn"  disableRipple>{buttontext} | <ReactCountryFlag  svg countryCode={ingles ? "US" : "BR"}/></Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions" className="heroui-menu"  itemClasses={{
    base: "menu-btn"
  }}>
        <DropdownItem key="new" onClick={() => {setingles(false)}}><ReactCountryFlag countryCode="BR" svg/> |  {idioma2}</DropdownItem>
        <DropdownItem key="ingles" onClick={() => {setingles(true)}}> <ReactCountryFlag countryCode="US" svg/> | {idioma1}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
</div>
    </>
  )

}