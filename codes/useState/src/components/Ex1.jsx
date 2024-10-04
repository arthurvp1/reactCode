import React, { useState } from 'react'

function Ex1() {
    var [escrita, setEscrita] = useState();

    function temp(){
        var temp,escolha;
        // var [temperatura, setTemperatura] = useState();

        temp = Number(prompt("Digite a temperatura:"))

        
        escolha = Number(prompt(`Você quer converter para:
        1-Fahrenheit
        2-Celcius`))
        
        if(escolha == 1){
           setEscrita(temp += (temp*1,8) + 32)
        }
        else if(escolha == 2){
            setEscrita(temp += (temp - 32)/1,8)
        }
        else{
            alert("valor invalido")
        }
        
        // setTemperatura("ligar")


    }

  return (
    <div className='ex1-container'>
      <button className='ar-condicionado' onClick={temp}>ligar</button><br></br>
      {escrita}
    </div>
  )
}

export default Ex1
