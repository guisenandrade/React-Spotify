import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function ConteudoPrincipal() {
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
        <div className="bg-gray-400 w-3/4 grid grid-cols-4 place-items-center items-center">
         <>
        
          {artistas.filter (artista => artista.genero === "Funk")
          .map(artista => (
            <Link to ={`/artista/${artistas.id}`}>
            <div className="bg-red-500 w-28 h-28 flex flex-col rounded-xl justify-around  items-center">
            <h1>{artista.name}</h1>
            <h1>{artista.genero}</h1> 
         
          </div>  
        </Link>
              
            ))}
          
          </>
        </div>
     );
}

export default ConteudoPrincipal;