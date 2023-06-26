import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js"
import { GiAnubis } from "react-icons/gi";
import { FaHeart } from "react-icons/fa";
import Loader from "../loader components/Loader";
import { setSearchTerm, selectSearchTerm } from "../../store/slices/searchSlice";
import { selectQuantityItems } from "../../store/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import useProducts from "../../store/hooks/useProducts";

const NavBar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  const isShopCartPage = location.pathname === "/cart";
  const isWishlisttPage = location.pathname === "/wishlist";
  const { isLoading } = useProducts();
  const dispatch = useDispatch();
  const searchTerm = useSelector(selectSearchTerm);
  const quantityTotal = useSelector(selectQuantityItems)

  console.log(quantityTotal)
  const handleSearch = (event: { target: { value: string; }; }) => {
    dispatch(setSearchTerm(event.target.value));
  };


  if (isLoading) {
    return <Loader />;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
  <NavLink className="navbar-brand" to="/"> <span className="fs-3 ps-2"> <GiAnubis/> </span>E-Shop by Alik</NavLink>
  <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="collapse"
  data-bs-target="#navbarNavAltMarkup"
  aria-controls="navbarNavAltMarkup"
  aria-expanded="false"
  aria-label="Toggle navigation"
>
  <span className="navbar-toggler-icon"></span>
</button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link active" to="home">Products <span className="sr-only">{isHomePage && "(current)"}</span></NavLink>
      <NavLink className="nav-item nav-link" to="/cart"><span className="shopCart">Cart <AiOutlineShoppingCart/> {quantityTotal} </span>{isShopCartPage &&  "(current)"}</NavLink>
      <NavLink className="nav-item nav-link active" to="/wishlist"> Wishlist <FaHeart/> <span className="sr-only">{isWishlisttPage && "(current)"}</span></NavLink>
      <NavLink className="nav-item nav-link disabled" to="/">Admin Panel</NavLink>
    </div>
    <form className="d-flex ps-5 ms-5">
        <input 
        className="form-control me-2" 
        type="search" 
        placeholder="Search" 
        aria-label="Search"
        value={searchTerm}
        onChange={handleSearch}/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
  </div>
  <div>
    <img className="rounded-circle me-1" src="https://e7.pngegg.com/pngimages/527/757/png-clipart-hacker-hacker.png" alt="Alik" style={{ width: '45px' }}/>
  </div>
</nav>
  )
}

export default NavBar