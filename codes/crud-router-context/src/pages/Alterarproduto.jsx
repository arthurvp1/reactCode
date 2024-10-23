import React from 'react'
import { GlobalContext } from '../contexts/GlobalContext'
import { useContext } from 'react'
import { useState } from 'react'
import Navbar from '../components/Navbar';

function Alterarproduto() {
    
    const { produto, setProduto } = useContext(GlobalContext);
    const [inputProduto, setInputproduto] = useState('');
    
    return (
        <div>
            <Navbar />

            <h1>Alteração de produto</h1>
            <p>Produto atual : {produto}</p>


            <section>
                <label>Altera o produto ai!</label>
                <input type="text"
                    value={inputProduto}
                    onChange={(e) => setInputproduto(e.target.value)}/>
            </section>

            <button onClick={() => setProduto(inputProduto)}>uai</button>
        </div>
    )
}

export default Alterarproduto
