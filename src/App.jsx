import { useState } from "react"
import Cardsidebar from "./assets/componentes/Cardsidebar"
import Container from "./assets/componentes/Container"
import ConteudoPrincipal from "./assets/componentes/ConteudoPrincipal"
import Header from "./assets/componentes/Header"
import Sidebar from "./assets/componentes/Sidebar"
import { useEffect } from "react"
import artista from "../server/Models/Artista"

function App() {

const [artistas, setArtistas] = useState ([])
const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
  fetch('http://localhost:3000/artistas')
  .then(res => res.json())
  .then(res => setArtistas(res))
  .catch(err => console.log(err))
  .finally(() => console.log('Finalizou a requisição'))

}, [])

  return (
    <>
    <Header/>
      <Container>
       <Sidebar>
        <Cardsidebar/>
        <Cardsidebar/>
        <Cardsidebar/>
        </Sidebar>
        <ConteudoPrincipal>
          <>
          
          {artistas.filter (artista => artista.genero === "Funk")
          .map(artista => (
              <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
                <h1>{artista.name}</h1>
                <h1>{artista.genero}</h1>
              </div>  
            ))}
          
          </>
      
        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App
