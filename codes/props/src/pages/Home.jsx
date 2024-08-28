import Titulo from '../components/Titulo'
import './Home.css'

function Home() {
  return (
    <div className='home-container'>
        <h1 className='titulo'> <Titulo texto={"OLOCO"} emoji={"🐺🐷🐷🐷"}/> </h1>
        <h2 className='subtitulo'>Dinossauros demaisss!</h2>
    </div>
  )
}

export default Home
