import './App.css'
import Foto from './components/Foto'
import Notas from './components/Notas'
import Porco from './components/porco'

function App() {


  return (
    <div className='app-container'>

      {/* <Notas/> */}

      <div className='centraliza-foto'>

        <Foto/>

      </div>

      <div className='centraliza-botao'>

        <Porco/>

      </div>
    </div>
  )
}

export default App
