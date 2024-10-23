import { useParams } from "react-router-dom"

export default function DetalheArtista(){
    const {id} = useParams()
    return(
        <p>{id}</p>
    )
}