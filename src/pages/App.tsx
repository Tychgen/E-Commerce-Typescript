import * as React from 'react';
import { Route, Routes, useLocation, Router, useNavigate} from 'react-router-dom';
import NavBar from '../components/layouts/NavBar';
import Products from './Products';
import Post from './Post';
import ShopCart from './ShopCart';
import Wishlist from './Wishlist';
import Login from './Login';





const App = () => {
  const location = useLocation();
  const isLoginPage = location.pathname ==="/"


  return (
    <>
      
        {!isLoginPage && <NavBar />}
        <Routes>
          <Route index={true} element={<Login/>}/>
          <Route path="/home" element={<Products/>}/>
          <Route path="/product/:id" element={<Post/>} />
          <Route path='/wishlist' element={<Wishlist/>}/>
          <Route path="/cart" element={<ShopCart/>}/>
        </Routes>
    </>
  );
}


export default App
