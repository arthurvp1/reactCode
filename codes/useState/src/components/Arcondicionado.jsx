import React, { useState } from 'react'

function Arcondicionado() {
  const [inputdoar, setInputdoar] = useState();

    function mudatemp(event){

        console.log(event);
        setInputdoar(event.target.value)
    }                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   abc         

  return (
    <div className='ar-container'>
      <label> Digite a temp em celcius</label>
      <input type="text" className='entrada' placeholder='Digite a temperatura'
      value = {inputdoar}
      onChange = {mudatemp}
      />

      <button onClick={converter}>converter</button>
      <p>temp = {inputdoar} </p>
    </div>
  )
}

export default Arcondicionado