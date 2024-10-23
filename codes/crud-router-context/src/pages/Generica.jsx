import Navbar from "../components/Navbar"
import { useContext } from "react"
import { GlobalContext } from "../contexts/GlobalContext"

function Generica() {

  const {usuarioLogado} = useContext(GlobalContext);
  const{idadeUsuario} = useContext(GlobalContext);

  return (
    <div>
        <Navbar />

      <h1>Olá {usuarioLogado}</h1>
      <p>Você tem {idadeUsuario} anos. nada específico neeer👄👅...</p>
    </div>
  )
}

export default Generica
