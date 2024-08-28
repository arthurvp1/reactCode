import './App.css'
import Titulo from './components/Titulo'
import Cadastro from './pages/Cadastro'
import Home from './pages/Home'
import Sorteio from './pages/Sorteio'

function App() {

  return (
    <div className='app-container'>
     {/* <img className='sun' src="/sun.svg"/> */}
      {/* <Home/> */}
      <Cadastro />
      <Sorteio/>
      {/* <Body/> */}
    </div>
  )
}

export default App
