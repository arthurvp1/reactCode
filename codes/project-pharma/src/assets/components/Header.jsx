import React from 'react'
import './Header.css'

function Header() {
  return (
    <div className='header-container'>

        <div className='logotipo'>
            <img className='img-logotipo' src="../public/images/farmarcia-logo-pq.png"/>
        </div>

        <div className='titulo'>

            <label className='titulo-farmacia'>Farmárcia</label>

        </div>

        <div className='vazio'>

        </div>

        <div className='sections'>        
            <label className='loja'>Loja</label>
            <label className='local'>Local</label>
            <label className='quem-somos'>quem somos</label>

        </div>
    </div>
  )
}

export default Header
