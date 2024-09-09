import React, { useState } from 'react'

function Ex2() {
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
    </div>
  )
}

export default Ex2
