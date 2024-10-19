import Navbar from "../components/Navbar"
import './Home.css'
import { useContext, useState } from "react"
import { GlobalContext } from "../contexts/GlobalContext"
function Home() {
  const { usuarioLogado } = useContext(GlobalContext)


  return (
    <div className="home-container">
      

      {/*lado esquerdo da pagina*/}
      <aside className="esquerdo">


        <div className="texts">
          <label className="titulo">Cadastro de funcionários</label>
          <p className="descricao">Digite os dados do funcionário abaixo e clique em
            <label className="verde">&nbsp;Confirmar</label></p>
        </div>

        <section className="inputs">
          <input className="username-input" type="text" />
          <input className="email-input" type="email" />
          <input className="senha-input" type="password" />
          <input className="telefone" type="text" />
          <input className="nascimento-input" type="date" />
        </section>

        <section className="buttons">
          <button className="confirma">CONFIRMAR</button>
          <button className="limpa">LIMPAR</button>
        </section>

      </aside>

      {/* lado direito da pagina */}

      <aside className="direito">
      
      </aside>
    </div>
  )
}

export default Home
