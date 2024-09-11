import { useState } from 'react'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [dias,setDias] = useState();
  const [valorfinal,setValorfinal] = useState();
  
  function mudadias(event){

    setDias(event.target.value)
    
  }
  
  function calculadias(){
    var qtddias = dias, valordias;

    switch(qtddias){

      case qtddias>= 1 && qtddias<=5 :

      valordias = (100*qtddias)

      valorliquido = ((valordias - valordias * 0.90) * 0.85)

      setValorfinal(taxa = (valorliquido + 100))

      break;

      case qtddias>= 6 && qtddias<=10 :

      valordias = (90*qtddias)

      valorliquido = ((valordias - valordias * 0.90) * 0.85)

      setValorfinal(taxa = (valorliquido + 100))
      
      break;

      case qtddias > 11 :

      valordias = (80*qtddias)

      valorliquido = ((valordias - valordias * 0.90) * 0.85)

      setValorfinal(taxa = (valorliquido + 100))
      
      break;

      default:

    }
    
  }


  return (
    <>
    <input type="number" placeholder='quantos dias ficará' className='inputdias'
    onChange={mudadias}
    value={dias}
    />
    <button onClick={calculadias}>Calcular</button>

    {valorfinal}
    </>
  )
}

export default App
