import React, { useState } from 'react'

function Notas() {
    var nota = 0, notatotal,somanota = 0;
    const [leitura, setLeitura] = useState()
    const [notafinal, setNotafinal] = useState()

    function media(){

        for (let i = 0; i < 10; i++) {
            
            nota = Number(prompt("Digite a nota: "))

            somanota += nota

            

        }

        notatotal = (somanota/10);

        setNotafinal("Sua media total é "+ notatotal)

        if(notatotal>=7){
            setLeitura("Você passou!")
        }
        else{
            setLeitura("Reprovado!!")
        }
    }

  return (
    <div>
      <button onClick={media}>Media</button><br></br>
      {notafinal}<br></br>
      {leitura}

    </div>
  )
}

export default Notas
