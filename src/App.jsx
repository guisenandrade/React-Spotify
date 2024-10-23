import { useState } from "react"
import Cardsidebar from "./assets/componentes/Cardsidebar"
import Container from "./assets/componentes/Container"
import ConteudoPrincipal from "./assets/componentes/ConteudoPrincipal"
import Header from "./assets/componentes/Header"
import Sidebar from "./assets/componentes/Sidebar"
import { useEffect } from "react"
import artista from "../server/Models/Artista"
import { Outlet } from "react-router-dom"

function App() {



  return (
    <>
    <Header/>
      <Container>
       <Sidebar>
        <Cardsidebar/>
        <Cardsidebar/>
        <Cardsidebar/>
        </Sidebar>
        <Outlet/>
      </Container>
    </>
  )
}

export default App
