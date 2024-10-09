import { useState } from "react"
import Cardsidebar from "./assets/componentes/Cardsidebar"
import Container from "./assets/componentes/Container"
import ConteudoPrincipal from "./assets/componentes/ConteudoPrincipal"
import Header from "./assets/componentes/Header"
import Sidebar from "./assets/componentes/Sidebar"
import { useEffect } from "react"

function App() {

const [artistas, setArtistas] = useState ([])
const [isLoading, setIsLoading] = useState(false)

useEffect(() => {
  fetch('http://localhost:3000/artistas')
  .then(res => res.json())
  .then(res => setArtistas(res))
  .catch(err => console.log(err))

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
          {artistas.map ((artista) => (
              <div className="bg-red 500 w-28 h-28 flex flex-col justify-around items-center">
                <p>{artista.name}</p>
                <div className="bg-green-400 w-3/4 h-7"></div>
              </div>  
            ))}
          
        <div className="bg-red-500 w-28 h-28 flex flex-col justify-around items-center">
            <div className="bg-green-400 w-3/4 h-7"></div>
            <div className="bg-green-400 w-3/4 h-7"></div>
          </div>
        </ConteudoPrincipal>
      </Container>
    </>
  )
}

export default App
