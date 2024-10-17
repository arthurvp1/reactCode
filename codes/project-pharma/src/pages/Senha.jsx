import React from 'react'


const vetorpreferencial = [];
const vetornomral = [];

function solicitasenha(){
  
  // var vetorpreferencial = [], vetornomral = [];
  var numero, valorselect, inputvalor;
  
  numero = Math.floor(Math.random() * (999 - 1)) + 1;
  
    alert(numero)
  
    inputvalor = document.getElementById('inputvalue').value;
    valorselect = document.getElementById('select-tipo').value;

    alert(inputvalor)

    inputvalor.value = Number(numero)

    alert(inputvalor)

    if(valorselect == '1'){

      vetornomral.unshift(numero);

    }
    else if(valorselect == '2'){

      vetorpreferencial.unshift(numero);

    }

    console.log(vetornomral)
    console.log(vetorpreferencial)



}

function Senha() {
  return (
    <div className='senha-container'>


    <select id="select-tipo">

      <option value="1" selected>Normal</option>
      <option value="2" selected>Preferencial</option>

    </select>  

    <input id='inputvalue' type="number" disabled value={0}/>

    <button onClick={solicitasenha}>Gerar Senha</button>   




</div>
  )
}

export default Senha
