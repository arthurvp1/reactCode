import { useState } from 'react'
import './App.css'
import OlaUsuario from './components/OlaUsuario';
import AreaParaAdultos from './components/AreaParaAdultos';
import Login from './components/Login';

function App() {
  // const [count, setCount] = useState(0)
  const [logado, setLogado] = useState(true);
  const [idade,setIdade] = useState(0);

  function mudatrue(){

    setLogado(true);
    

  }

  return (
    <>

    <div className='render-container'>


     {logado && <OlaUsuario/>}

     <button onClick={mudatrue}>Logar</button>
     <button onClick={ () => {setLogado(false)} }>Deslogar</button>
     <button onClick={ () => setLogado(!logado) }>Alternar</button>

    </div>

    <div className='render-container'>

      {idade >= 18 && <AreaParaAdultos/>}

      <button onClick={() => setIdade(idade - 1)}>-</button>

      {idade}

      <button onClick={() => setIdade(idade + 1)}>+</button>

      <button onClick={() => setIdade(0)}>Reset</button>

    </div>

    <div className='render-container'>

      {logado && <Login/>}

    </div>

    </>
  )
}

export default App
