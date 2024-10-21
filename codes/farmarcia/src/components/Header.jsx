import React, { useState } from 'react'
import './Header.css'
import './Header.css'
import Body from './Body'
import Produtos from '../pages/Produtos'
import Local from '../pages/Local' 



function Header() {

  return (
    <div className='header-container'>
      <div className='logotipo'>
          <img className='img-logotipo' src="/images/farmarcia-logo-pq.png"/>
      </div>

      <div className='titulo'>
          <label className='titulo-farmacia'>Farmárcia</label>
      </div>

      <div className='vazio'> </div>

      {/* <div className='sections'>        
        <button className='loja'>Loja</button>
        <button className='local'>Local</button>
        <button className='senha'>Senha</button>
      </div> */}
  </div>
  )
}

export default Header
