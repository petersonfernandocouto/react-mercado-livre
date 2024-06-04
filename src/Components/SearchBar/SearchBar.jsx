import './SearchBar.scss';
import { FaSearch } from "react-icons/fa";
import React, { useContext } from 'react';
import ApiProdutos from '../../api/API';
import Contexto from '../../Context/Context';

function SearchBar() {
    const { setProducts, setLoading, BuscarValor, setBuscarValor } = useContext(Contexto);

    ///////////////////////////////////////////////////////    PULA LINHA    ///////////////////////////////////////////////////////////

    // Na linha abaixo, estamos criando uma função para que, quando digitamos algo no input, algo seja executado. Estou falando de "const HandleSearch"
    const HandleSearch = async (event) => {

        event.preventDefault(); // Este "event.preventDefault()" evita que a página recarregue quando digitamos algo no input. Lembrando que devemos passar um parâmetro na função.

        setLoading(true); // Aqui o Loading vai agir

        const Produtos = await ApiProdutos(BuscarValor); // O ApiProdutos é aquele documento que criamos para fazer a API, e ele está recebendo como parâmetro o BuscarValor, que é tudo o que digitamos no input que criamos abaixo.

        setBuscarValor(""); // Isso é para apagar o valor de "BuscarValor" toda vez que clicamos em pesquisar ou damos enter. Ele deleta o que digitamos no input.

        setProducts(Produtos);

        setLoading(false); // Quando o "Produtos" for encontrado, o Loading passa a ser falso
    };

    ///////////////////////////////////////////////////////    PULA LINHA    ///////////////////////////////////////////////////////////

    return (
        <form className='Search-bar' onSubmit={HandleSearch}>

            <input 
                type='search'
                placeholder='Buscar Produtos'
                className='Search'
                required 

                value={BuscarValor} // Isso significa que o valor exibido no campo de texto será controlado pelo estado "BuscarValor".
                onChange={({ target }) => setBuscarValor(target.value)} // As últimas linhas explicam esta função
            />

            <button
                type='submit'
                className='ButtonSearch'>
                <FaSearch />
            </button>
            
        </form>
    );
}

export default SearchBar;

// onChange: Este é um evento de JavaScript que é acionado sempre que o valor de um elemento de formulário é alterado pelo usuário. No contexto do <input>, o evento onChange ocorre quando o valor do campo de texto é modificado. O "target" é padrão quando utilizamos "onChange".
