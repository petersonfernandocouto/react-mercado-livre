import './App.scss';
import Header from './Components/Header/Header';
import Products from './Components/Products/Products';
import Provider from './Context/Provider';
import Cart from './Cart/Cart';


function App() {
  
  return (

    <div className="App">
      
        <Provider >

            <Header />

            <Products />

            <Cart />

        </Provider>

    </div>
  );
}

export default App;
