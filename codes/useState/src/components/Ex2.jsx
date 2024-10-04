import React, { useState } from 'react'

function Ex2() {

    function calculaidade(){

        var chapa1 = 0, chapa2 = 0,idadevice,idadepresidente;
        // var [vencedor, setVencedor] = useState();  
        
        idadepresidente = Number(prompt("Digite a idade do presidente chapa 1: "))
        idadevice = Number(prompt("Digite a idade do vice-presidente chapa 1: "))

        chapa1 += (idadepresidente + idadevice)

        idadepresidente = 0
        idadevice = 0
        
        idadepresidente = Number(prompt("Digite a idade do presidente chapa 2: "))
        idadevice = Number(prompt("Digite a idade do vice-presidente chapa 2: "))

        chapa2 += (idadepresidente + idadevice)

        if(chapa1> chapa2){
            setVencedor(chapa1);
            {"O vencedor é ", vencedor}
        }
        else if(chapa1 < chapa2){
            setVencedor(chapa2);
            {"O vencedor é ", vencedor}
        }
        else{
            {"Empate entre as chapas"}
        }
    
    
    }

  return (
    <div className='ex2-container'>
      
        <button className='calcular' onClick={calculaidade}>Calcular</button>

    </div>
  )
}

export default Ex2
