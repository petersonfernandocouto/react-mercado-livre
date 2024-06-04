import './Cart.scss'
import { GrCart } from "react-icons/gr";
import { useContext } from 'react';
import Contexto from '../../Context/Context';


function CartButton() {


    const { CartItem, AbreCart, setFechaCart } = useContext(Contexto); //Estamos importando CartItem de Provider.jsx, onde são guardadas as informações do carrinho


    return (
        <div>

            <button
                className='CartButton'
                onClick={() => setFechaCart(!AbreCart)} // Adiciona funcionalidade de alternância de estado do carrinho ao clicar; o AbreCart inicia como true
            >

                <GrCart />


                {CartItem.length > 0 && <span className='Cart-Status'>{CartItem.length}</span>}
                {/* A linha acima verifica se o CartItem é maior que 0; se for, exibe o número dentro do ícone */}

            </button>

        </div>
    );
}


export default CartButton;