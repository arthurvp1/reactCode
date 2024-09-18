import React, { useState } from 'react'

function Ex2() {
const [anos,setAnos] = useState(0);
const [alturaenzo,setAlturaenzo] = useState(0);
const [alturavalen,setAlturavalen] = useState(0);

    function tempoaltura(){

        var enzo = 1.35, valentina = 1.50;
        let tempo = 0
    

        while(enzo<valentina){
    
            enzo += 0.03;
            valentina += 0.02;

            tempo += 1

            console.log(tempo)

            setAnos(tempo);
        }

        console.log(enzo);


        setAlturaenzo(enzo);
        setAlturavalen(valentina);

    }


  return (
    <div>
        <label>altura do enzo atual: {alturaenzo.toFixed(2)} </label> <br /> <br />
        <label>altura da valentina atual : {alturavalen.toFixed(2)} </label> <br /> <br />
        <button onClick={tempoaltura}> Calcula o tempo </button>
        <p>Levou: {anos} anos </p>

    </div>
  )
}

export default Ex2
