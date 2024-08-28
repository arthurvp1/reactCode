import Titulo from '../components/Titulo'
import './Cadastro.css'



function Cadastro() {
    function cadastrar(){
      alert("Cadastradooo!")

    }


  return (
    <div className='cadastro-container'>
        <h1> <Titulo texto={"Sorteio né"} emoji={"😈"}/> </h1>
        {/* <label>Nome</label>
        <input className='nome' type="text" />
        <label>Altura</label>
        <input className='altura' type="number" />
        <button onClick={cadastrar}>Cadastrar</button> */}

    </div>
  )
}

export default Cadastro
