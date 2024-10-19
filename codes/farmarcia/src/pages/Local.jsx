import React from 'react'
import './Local.css'

function Local() {
    return (
        <div className='local-container'>
            <h2 className='contato-titulo'>Contatos</h2>
            <img className='contato-img' src="/images/farmarcia-cartoes.png" alt="" /><br/>
            <label className='contato-text'>
                Endereço de E-mail: contato@exemplo.com.br<br />
                Número: (11) 91234-5678<br />
                www.exemplo.com.br<br />
                <a href="https://t.me/+2poQ1uIoulYyYjkx">Telegram: Farmarcia Telegram</a><br />
                Facebook: Exemplo Oficial<br />
                LinkedIn: João Silva
            </label>

        </div>
    )
}

export default Local
