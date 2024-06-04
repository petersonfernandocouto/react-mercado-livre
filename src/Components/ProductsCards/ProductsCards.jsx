import './ProductsCards.scss';
import propTypes from 'prop-types'; // É uma biblioteca utilizada em React para verificar os tipos de propriedades (props) que um componente espera receber. Ele é útil para validar se as props fornecidas a um componente estão corretas. Por exemplo, se um componente espera uma propriedade do tipo string, o prop-types pode ser usado para verificar se essa propriedade realmente é uma string.
import BrazilianCurrency from '../../BrazilianCurrency/Currency';
import Contexto from '../../Context/Context';
import { useContext } from 'react';

function ProductsCards({ data }) {

    const { title, thumbnail, price } = data; // Aqui estamos dizendo que 'title', 'thumbnail' e 'price' são iguais aos valores presentes em 'data', que é passado como propriedade para o componente. Estamos utilizando esses valores para exibir o título, a imagem e o preço do produto no componente.

    const { CartItem, setCartItens } = useContext(Contexto); // Isso está sendo armazenado no Contexto

    const AddCompras = () => {

        setCartItens([...CartItem, data]); // Os três pontos fazem com que a string ou array expanda, então "...CartItem" se torna "item1, item2, etc..."

    }; // Aqui estamos criando uma função para quando clicarmos em "comprar" adicionar as informações, lembrando que as informações que queremos estão em "data"


    return (
        <section className='ProdutsCards'>

            <img 
                src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} // Tudo que está depois de thumbnail você pode apagar; na última linha irei explicar o que faz o código replace
                alt='Produtos' 
                className='IMGProdutos' 
            />


            <div className='infoProdutos'> 
                <h2 className='Value'>{BrazilianCurrency(price)}</h2> {/* Nesta linha o mais importante é o price; é nele que buscamos o valor da API. Se você apenas deixar {price}, dá certo, porém este BrazilianCurrency é uma lógica que eu criei para colocar "R$" e acrescentar "pontos". Exemplo: se você utilizar apenas {price}, o valor será 400000, mas com esta estilização do BrazilianCurrency (um arquivo em JavaScript), será R$:4.000,00 */}
                <h2 className='Title'>{title}</h2>                
            </div> 


            <button
                onClick={AddCompras}
                type='button' 
                className='ADDProduts'
            > 
                Comprar 
            </button>

            
        </section>
    );
}

export default ProductsCards;

ProductsCards.propTypes = {
    data: propTypes.shape({}).isRequired
};

// Replace: caso você clique em qualquer imagem da thumbnail, a última letra do link da imagem será "I". Se você retirar esta letra e colocar "W", a imagem fica com uma qualidade melhor e maior.
