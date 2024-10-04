import React, { useState } from 'react'

function Porco() {

  var [imprime, setImprime] = useState();

  function produto(){

    var moeda1 = 0.1 * 10;
    var moeda5 = 0.5 * 10;
    var moeda10 = 0.10 *  10;
    var moeda25 = 0.25 * 10;
    var moeda50 = 0.50 *  10;
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
      <button className='botao' onClick={produto}>Produto</button><br/><br/>

      {imprime}
    </div>
  )
}

export default Porco
