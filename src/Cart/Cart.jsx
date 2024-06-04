import { useContext } from 'react';
import './Cart.scss';
import CartItens from './CartItens/CartItens';
import Contexto from '../Context/Context';
import BrazilianCurrency from '../BrazilianCurrency/Currency';


function Cart() {

    const { CartItem, AbreCart } = useContext(Contexto);


    const ValorPreco = CartItem.reduce((acumulador, item) => {
        return item.price + acumulador;
    }, 0); 
    // Aqui é uma função baseada em arrays, onde estamos somando o CartItem por ele mesmo. O "acumulador" inicia com o valor 0 (nós mesmos definimos isso na última linha desta lógica) e o item vai atualizando o valor. O método reduce é usado para reduzir um array a um único valor.


    return (
        
        <section className={`cart ${AbreCart ? "cart--active" : ""}`}> {/* O AbreCart é true? Se for, aplica a classe cart--active */}

            <div className='teste'>

                <div className="CartItens">
                    {
                        CartItem.map((cartitens) => <CartItens key={cartitens.id} data={cartitens} />)
                    }
                </div>       

            </div>


            <div className="cartResume">

                <h2>{BrazilianCurrency(ValorPreco)}</h2>

            </div>
        </section>
    );
}

export default Cart;

// A data está escrita desta maneira porque no arquivo CartItens existe uma prop com o nome data.
