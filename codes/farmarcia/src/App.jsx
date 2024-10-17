import './App.css'
import Body from './components/Body'
import Header from './components/Header'
import Local from './pages/Local'
import Produtos from './pages/Produtos'
import Senha from './pages/Senha'

function App() {

  return (
    <div className='app-container'>
      
      <Header/>
      <Body/>
      <Produtos/>
      <Local/>
      <Senha/>

    </div>
  )
}

export default App
