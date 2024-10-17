import React from 'react'
import './Header.css'
import Body from './Body'
import Senha from '../../pages/Senha'

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
        <button onClick={() => <Senha/>} className='loja'>Loja</button>
        <button className='local'>Local</button>
        <button className='quem-somos'>Quem Somos</button>
        <button className='senha'>Senha</button>
        </div>
    </div>
  )
}

export default Header
