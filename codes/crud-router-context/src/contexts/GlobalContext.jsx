import { createContext, useState } from "react";

export const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {
let usuarioLogado = 'Arthur Viecili'
let idadeUsuario = '16'
let timeTorcida = 'Flamengo'
const [produto,setProduto] = useState('arroz');
const[produtos, setProdutos] = useState([])


    return(
        <GlobalContext.Provider value={{
        usuarioLogado,
        idadeUsuario, 
        timeTorcida,
        produto,
        setProduto,
        produtos,
        setProdutos
        
        }}>
            {children}
        </GlobalContext.Provider>
    )
}
