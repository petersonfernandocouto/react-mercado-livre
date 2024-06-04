import { useState } from "react";
import Contexto from "./Context";

function Provider({ children }) {
    const [Products, setProducts] = useState([]); // Aqui ele está iniciando com um array vazio "[]"

    const [loading, setLoading] = useState(true); // Isso é apenas para o design de loading. Leva um tempo até que os cards da API recarreguem e, enquanto isso, uma animação será exibida. Não é necessário colocar isso, é mais uma questão de design.

    const [CartItem, setCartItens] = useState([]);

    const [AbreCart, setFechaCart] = useState(false); // Utilizamos isso em Cart.jsx e "CartButton.jsx"

    const [BuscarValor, setBuscarValor] = useState(""); // Nota-se que o "useState" deve receber um valor inicial. Neste caso, como estamos trabalhando com um campo de input, deixarei o valor inicial vazio.

    const acesso = {

        Products,
        setProducts,

        loading, 
        setLoading,

        CartItem,
        setCartItens,

        AbreCart, 
        setFechaCart,

        BuscarValor, 
        setBuscarValor
    };

    return (

        <Contexto.Provider value={acesso}>

            {children}
            
        </Contexto.Provider>
    );
}

export default Provider;

// A função principal aqui é fazer com que todos os meus componentes tenham acesso a todo o conteúdo do meu provider. Então, no App.js, todos os meus componentes estão dentro de Provider.

// O Provider é aquele que irá prover os dados

// O consumer irá consumir os dados de Provider.jsx

// Antes de fazer o contexto, o melhor a fazer primeiro é colocar as const "Products, setProducts, loading, setLoading" dentro do arquivo "Products.jsx" para verificar se está funcionando.