import "./CartItens.scss"
import { IoClose } from "react-icons/io5";
import BrazilianCurrency from "../../BrazilianCurrency/Currency";
import propTypes from 'prop-types'
import Contexto from "../../Context/Context";
import { useContext } from "react";


function CartItens( {data} ) {

    const { id, title, thumbnail, price } = data
    
    const {CartItem, setCartItens} = useContext( Contexto )


    //Lógica do botão de remover itens dentro do carrinho
    const RemoveItem = () => {

        const updatedItem = CartItem.filter( (item) => item.id !== id);

        setCartItens(updatedItem)
    }
    

    console.log(id)

    return (

        <section className="CartItens">

          <div className="LayoutCart"> 
            
                <img 
                    src={thumbnail}
                    alt=""
                    className="IMGProduto"
                />
          

            <div className="InfoProduto">

                <h3> {title} </h3>    

                <h3 className="ValorProduto"> {BrazilianCurrency (price)} </h3>

                

            </div>    


            <button
             className="CloseButton"
             onClick={ RemoveItem }
             >

                    <IoClose />

            </button>



          </div>
            


        </section>
    )
}


export default CartItens;

CartItens.propTypes = {
    data: propTypes.shape({}).isRequired
}; 
