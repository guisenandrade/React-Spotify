import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import DetalheArtista from './assets/componentes/DetalhesArtista.jsx'
import ConteudoPrincipal from './assets/componentes/ConteudoPrincipal.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {index:true, element: <ConteudoPrincipal/>},
      {path: '/artista/:id', element : <DetalheArtista/>}
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
