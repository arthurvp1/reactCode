import React from 'react'
import './Produtos.css'

function Produtos() {
    return (
        <div className='produtos-container'>
            <h2 className='produtos-text'>Compre nossos Produtos</h2>
            <div className='container-imagens'>
                <img className='produtos-produto1' src="/images/farmarcia-camisetas.png" alt="" />
                <img className='produtos-produto2' src="/images/farmarcia-camiseta.png" alt="" /><br/>
                <label className='produtos-desc'>
                    Camisetas "Farmárcia" – A Fusion de Estilo e Criatividade
                    Conheça as novas camisetas da Farmárcia, um ícone de modernidade e força. 
                    Cada peça é projetada com atenção aos detalhes,
                     refletindo a essência da Márcia, unindo conforto e sofisticação 
                     com um toque de originalidade.
                </label>
                <br/>
                <button>Comprar Agora</button>
            </div>
        </div>
    )
}

export default Produtos
