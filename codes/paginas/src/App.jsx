import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Meusdinos from './pages/Meusdinos'
import Contato from './pages/Contato'

function App() {
  const [count, setCount] = useState(0)
  const [pagina,setPagina] = useState(<Home/>)

  return (
    <>
      <div className='paginas-container'>

        <nav>
        <button onClick={() => setPagina(<Home/>)}>Home</button>
        <button onClick={() => setPagina(<Contato/>)}>muito chifre</button>
        <button onClick={() => setPagina(<Meusdinos/>)}>varios chifres</button>

        </nav>


        <button onClick={() => setCount((count) => count + 1)}>
          fui corno {count} vezes
        </button>
        {(count>= 1 && count<5) && <Home/>}
        {count>= 6 && <Meusdinos/>}
        {count>= 15 && <Contato/>}
        {count>= 30 && <Home/>}

        <button onClick={() => setCount(0)}>Nao fui traido!🤬</button>

        {/* {pagina} */}
      </div>
    </>
  )
}

export default App
