import './Produts.scss';
import React, { useEffect, useContext } from 'react';
import ApiProdutos from '../../api/API';
import ProductsCards from '../ProductsCards/ProductsCards';
import Loading from '../../Loading/Loading';
import Contexto from '../../Context/Context';

function Products() {

    const { Products, setProducts, loading, setLoading } = useContext(Contexto); // Estamos importando essas informações de Provider.jsx


    // Lembrando que uma parte da lógica de "Products, setProducts, loading, setLoading" está dentro de Provider. Ou seja, se você pegar as constantes "Products, setProducts, etc." e colocá-las aqui (excluindo de lá), o código vai funcionar.


    useEffect(() => {

        ApiProdutos('celulares').then((resposta) => {

            setProducts(resposta); // Aqui estamos dizendo que a "resposta" de ApiProdutos será o valor de "setProducts"

            setLoading(false); // Quando recebemos a resposta, setLoading tem que ser falso. Se for true, a página sempre ficará em loading
            
        });


    }, []); // O useEffect está recebendo uma função que chama ApiProdutos do arquivo "API.js". Quando ApiProdutos for executado, o then (que significa "então") recebe outra função, e essa função guarda a "resposta" dada por ApiProdutos e atualiza setProducts.


    return (

        (loading ? <Loading /> : // Isso é apenas a tela de loading. Estamos dizendo que se o loading for true, o ícone aparecerá; se for false, renderizará o que está abaixo.

        <section className='Produts'>

            {
                Products.map((produtc) => <ProductsCards key={produtc.id} data={produtc} />)
                // Para entender essa parte, veja as últimas linhas
            }

        </section>

        )
    );
}

export default Products;

// Referente a "Products.map etc.", parece um pouco confuso. Vou colocar um código aqui no commit que explica como isso funciona de uma maneira mais fácil de entender. Apague a parte "Products.map etc." e coloque o código abaixo:

// <ProductsCards data={{ title: "title", thumbnail: "URL_da_imagem", price: "200,00" }} />

// Neste código temos "data", que é uma prop criada em "ProductsCards.jsx", onde a prop diz que data é igual a title, thumbnail e price. Abra este arquivo "ProductsCards.jsx" para entender melhor.
