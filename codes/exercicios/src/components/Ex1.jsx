import React from 'react'
import { useState } from 'react'

function Ex1() {

    const [dias, setDias] = useState();
    const [valorfinal, setValorfinal] = useState();

    function mudadias(event) {

        setDias(event.target.value)

    }

    function calculadias() {
        var qtddias = Number(dias)
        var valordias

        if (qtddias >= 1 && qtddias <= 5) {
            valordias = 100 * qtddias
        } else if (qtddias >= 6 && qtddias <= 10) {
            valordias = 90 * qtddias
        } else if (qtddias > 10) {
            valordias = 80 * qtddias
        } else {
            setValorfinal(0);
        }

        valordias += (valordias - (valordias * 0.9)) * 0.85;
        setValorfinal(valordias + 100);

        setDias('')

        inputdias.value = dias


    }


    return (
        <div className='ex1-container'>
            <input type="number" placeholder='quantos dias ficará' className='inputdias'
                onChange={mudadias}
                value={dias}
            />

            <button onClick={calculadias}>Calcular</button>
            <p>Valor final: {valorfinal.toFixed(2)}</p>

        </div>
    )
}

export default Ex1
