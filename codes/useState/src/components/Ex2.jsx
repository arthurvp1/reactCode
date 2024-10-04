import React, { useState } from 'react'

function Ex2() {
<<<<<<< HEAD

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

=======
  const [idades, setIdade] = useState();
  
  
  function idade(){
    
    var presidente,vice,chapa1=0,chapa2=0;

     presidente = Number(prompt("Digite a idade do presidente da chapa 1: "));
     vice = Number(prompt("Digite a idade do vice da chapa 1: "));

     chapa1 += presidente + vice

     presidente = 0
     vice = 0

     presidente = Number(prompt("Digite a idade do presidente da chapa 2: "));
     vice = Number(prompt("Digite a idade do vice da chapa 2: "));

     chapa2 += vice + presidente;

     if(chapa1> chapa2){
      setIdade("A chapa vencedora é a chapa 1");
     }
     else{
      setIdade("A chapa vencedora é a chapa 2");
     }
    //  alert(idades)

     

  }




  return (
    <div className='ex2-container'>
      <button className='botaochapa' onClick={idade}>Clique aqui!</button><br/><br/><br/>

      {idades}
>>>>>>> fe413b736c52c8bd1b1685ac72ceeaafec02ee93
    </div>
  )
}

export default Ex2
