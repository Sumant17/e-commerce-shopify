
import './App.css';
import { Routes,Route, useNavigate, createSearchParams } from 'react-router-dom';

import NavBar from './components/navBar/NavBar';
import Products from './pages/homepage/Product';
import SingleProduct from './pages/detailproduct/SingleProduct';
import Cart from './pages/cart/Cart';
import NotFound from './pages/error/NotFound';

import { useCart } from './context/cartAll';

function App() {
  const navigate = useNavigate();
  const {cartItemCount} = useCart()
  function onSearch(searchQuery){
    navigate(`/?${createSearchParams({q:searchQuery})}`)
  }

  return (
    <>
    <NavBar onSearch={onSearch} cartItemCount={cartItemCount()}></NavBar>
    <Routes>
      <Route path='/'  element={<Products></Products>}></Route>
      <Route path='/detailproduct/:productId' element={<SingleProduct></SingleProduct>}></Route>
      <Route path='/cart' element={<Cart></Cart>}></Route>
      <Route path='*' element={<NotFound></NotFound>}></Route>
    </Routes>
    </>

  );
}

export default App;
