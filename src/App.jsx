import Cardsidebar from "./assets/componentes/Cardsidebar"
import Container from "./assets/componentes/Container"
import ConteudoPrincipal from "./assets/componentes/ConteudoPrincipal"
import Header from "./assets/componentes/Header"
import Sidebar from "./assets/componentes/Sidebar"

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
      <ConteudoPrincipal/>
      </Container>
    </>
  )
}

export default App
