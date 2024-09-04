import React, { useState } from 'react'

function Porco() {

  var [imprime, setImprime] = useState();

  function produto(){

    var moeda1 = 5;
    var moeda5 = 5;
    var moeda10 = 5;
    var moeda25 = 5;
    var moeda50 = 5;
    var totalcofre = (moeda1+moeda5+moeda10+moeda25+moeda50);
    var valorproduto;

    valorproduto = Number(prompt('Digite o valor de um produto: '))


    if(totalcofre>=valorproduto){
      setImprime("Compra efetuada!")
    }
    else{
      setImprime("Saldo insuficiente seu pobre!")
    }

  }

  return (
    <div className='botao-porco'>
      <button className='botao' onClick={produto}>Produto</button><br></br><br></br><br></br><br></br>

      {imprime}
    </div>
  )
}

export default Porco
