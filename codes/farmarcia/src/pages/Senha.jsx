import React from 'react'
import './Senha.css'

const vetorpreferencial = [];
const vetornomral = [];

function solicitasenha(){
    
  // var vetorpreferencial = [], vetornomral = [];
  var numero, valorselect, inputvalor;
  
  numero = Math.floor(Math.random() * (999 - 1)) + 1;
  
  
    inputvalor = document.getElementById('inputvalue').value;
    valorselect = document.getElementById('select-tipo').value;


    inputvalue.value = ("Sua senha: "+ numero)


    if(valorselect == '1'){

      vetornomral.unshift(numero);

    }
    else if(valorselect == '2'){

      vetorpreferencial.unshift(numero);

    }

    console.log(vetornomral)
    console.log(vetorpreferencial)



}

function limpavetores(){
    vetornomral = ''
    vetorpreferencial = ''

    if(vetornomral || vetorpreferencial == ''){

        alert("limpo")
    }
}

function Senha() {
  return (
    <div className='senha-container'>


    <select id="select-tipo">

      <option value="1" selected>Normal</option>
      <option value="2" selected>Preferencial</option>

    </select>  

    <input id='inputvalue' type="text" disabled value={0}/>

    <button onClick={solicitasenha}>Gerar Senha</button>

    <button onClick={()=>{alert(vetorpreferencial)}}>VetorPre</button>
    <button onClick={()=>{alert(vetornomral)}}>VetorNorm</button>
    <button onClick={limpavetores}>Limpa</button>         




</div>
  )
}

export default Senha
