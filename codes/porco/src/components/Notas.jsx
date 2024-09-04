import React from 'react'

function Notas() {

    function media(){
        var nota = 0, notatotal,somanota = 0;

        for (let i = 0; i < 10; i++) {
            
            nota = Number(prompt("Digite a nota: "))

            somanota += nota

            

        }

        notatotal = (somanota/10);

        alert("Sua media total é "+ notatotal)

        if(notatotal>=7){
            alert("Você passou!")
        }
        else{
            alert("Reprovado!!")
        }
    }

  return (
    <div>
      <button onClick={media}>Media</button>
    </div>
  )
}

export default Notas
