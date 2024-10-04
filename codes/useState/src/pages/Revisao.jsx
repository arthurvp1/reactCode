import React, { useState } from 'react'

function Revisao() {

    let variavel = 0;
    const [estado, setEstado] = useState(variavel+10); 


  return (
    <div>
        <label>Olá baby</label> <br/>
      {estado}
    </div>
  )
}

export default Revisao
