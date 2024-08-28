import './Sorteio.css'

function Sorteio() {

    function sorteio() {
       var numeroAleatorio =  Math.floor(Math.random() * (100 - 1 + 1))+1
        alert("O número gerado é: "+numeroAleatorio)
    }
  return (
    <div className='sorteio-container'>
      <button onClick={sorteio}><strong>Sortear número</strong></button>
    </div>
  )
}

export default Sorteio
