import React from 'react'
import './Body.css'
import Produtos from '../pages/Produtos'
import Local from '../pages/Local'
import Senha from '../pages/Senha'

function Body() {
  return (
    <div className='body-container'>

      <label className='body-sobre1'>Sobre Nós</label>
      <img className='body-imgPlaca' src="/images/farmarcia.png" alt="" />
      <label className='body-sobre2'>
        Transformando Desafios em Oportunidades: Descubra a Farmárcia
        Seja bem-vindo à Farmárcia, onde a inovação se une à tradição para proporcionar a melhor experiência em 
        saúde e bem-estar. Nossa trajetória é uma história de resiliência e transformação, refletida em cada detalhe do nosso serviço.
      </label>

      <label className='body-historia1'>Nossa Trajetória</label>
      <img className='body-imgPlaca' src="/images/farmarcia-placa.png" alt="" />
      <label className='body-historia2'>
        A Farmárcia foi revitalizada por Márcia Maria Mirenda, uma empreendedora dedicada e visionária com 
        formação em administração e uma paixão por design e tecnologia. Com 32 anos e uma carreira repleta de desafios e conquistas, 
        Márcia deu nova vida ao legado de seu tio Mário, que sempre foi um pilar na comunidade.
      </label>
      <Produtos/>
    </div>
  )
}

export default Body
