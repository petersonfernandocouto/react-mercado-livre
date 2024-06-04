import './Header.scss'
import SearchBar from '../SearchBar/SearchBar'
import Cart from '../Cart/CartButton'


function Header() {

    return (

        <header className='Header'>

            <div className="header-content">

                   <h3>Peter's Store</h3>

                   <SearchBar />

                   <Cart />


            </div>


        </header>



    )
}



export default Header