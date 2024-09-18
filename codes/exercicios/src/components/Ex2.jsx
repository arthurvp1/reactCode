import React, { useState } from 'react'

function Ex2() {
    const [anos, setAnos] = useState(0);
    const [alturaenzo, setAlturaenzo] = useState(0);
    const [alturavalen, setAlturavalen] = useState(0);
    var anoAtual = new Date().getFullYear();

    function tempoaltura() {

        var enzo = 1.35, valentina = 1.50;
        let tempo = 0
        let anoAtualnovo


        while (enzo < valentina) {

            enzo += 0.025;
            valentina += 0.02;

            tempo += 1

            anoAtualnovo = anoAtual + tempo

            setAnos(anoAtualnovo);

        }


        // console.log(enzo);


        setAlturaenzo(enzo);
        setAlturavalen(valentina);

    }


    return (
        <div>
            <label>altura do enzo atual: {alturaenzo.toFixed(2)} </label> <br /> <br />
            <label>altura da valentina atual : {alturavalen.toFixed(2)} </label> <br /> <br />
            <button onClick={tempoaltura}> Calcula o tempo </button>
            <p>Enzo passa a valentina em : {anos}  </p>
            <p>Levou {tempo} anos </p>

        </div>
    )
}

export default Ex2
