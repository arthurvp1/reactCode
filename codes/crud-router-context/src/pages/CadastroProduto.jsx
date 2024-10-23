import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar';

import { GlobalContext } from '../contexts/GlobalContext';


function CadastroProduto() {
    
    const {produtos,setProdutos} = new useContext(GlobalContext);
    
    const[inputnome, setInputnome] = useState('');
    const[inputpreco, setInputpreco] = useState('');

    useEffect(()=>{ console.table(produtos)}, [produtos]);

    function cadastrarProduto(){

        let produto = {
            id: Date.now(),
            nome: inputnome,
            preco: inputpreco,
        }
        
        setProdutos([...produtos, produto])

       

    }

  return (
    <div>
        <Navbar/>
        <center>
      <h1>Cadastro de produtos</h1>

        <div className='input-container'>

            <label htmlFor="">
                Nome do produto:
            </label>

            <input type="text"
            value={inputnome}
            onChange={(e) => setInputnome(e.target.value)} />

        </div>

        <div className='input-container'>

            <label htmlFor="">
                Valor do produto: &nbsp;
            </label>

            <input type="number"
            value={inputpreco}
            onChange={(e) => setInputpreco(e.target.value)} />

            </div>

            <button onClick={cadastrarProduto}>Cadastrar Produto</button><br/>

            {produtos.map((p) => (
                <div>
                    <p>{p.nome}</p>
                </div>
            ))}

        </center>

    </div>
  )
}

export default CadastroProduto