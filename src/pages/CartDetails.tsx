import React from 'react'
import { NavLink } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import {FaPlus, FaMinus} from "react-icons/fa"
import "../styles/cartDetails.css"
import { addToCart, removeFromCart, selectCartItems, increaseQuantityTotal, decreaseQuantityTotal, CartItems } from '../store/slices/cartSlice'
import { useAppDispatch, useAppSelector } from '../store/hooks/storeHooks'
import { Product } from '../store/hooks/useProducts'

type CartType = {
  product: Product
}

const CartDetails = ({product}: CartType) => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector(selectCartItems)
  
  const handleAddToCart = (id: number) => {
    const cartItem: CartItems = {
      id: id,
      quantity: 1,
    };
  
    dispatch(addToCart(cartItem));
    dispatch(increaseQuantityTotal());
  };
  
  const handleRemoveFromCart = (id: number) => {
    const cartItem: CartItems = {
      id: id,
      quantity: 1, 
    };
  
    dispatch(removeFromCart(cartItem));
    dispatch(decreaseQuantityTotal());
  };

  return (
                 <>               
                  <div className="card mb-3">
                      <div className="card-body">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex flex-row align-items-center">
                            <div>
                              <NavLink to={`/product/${product.id}`}>
                              <img src={product.image} className="img-fluid rounded-3" alt="Shopping item" style={{ width: '65px' }} />
                              </NavLink>
                            </div>
                            <div className="ms-3">
                              <h5>{product.title}</h5>
                              <p className="small mb-0">{product.category}</p> 
                            </div>
                            <div className='pe-5 pt-5 me-4'>
                              <button className='plus' onClick={() => handleAddToCart(product.id)}><FaPlus/></button>
                            </div>
                            <div className='pe-5 pt-5 me-4'>
                              <button className='minus' onClick={() => handleRemoveFromCart(product.id)}><FaMinus/></button>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center">
                            <div style={{ width: '50px' }}>
                            <h5 className="fw-normal mb-0">{cartItems.find((item) => item.id === product.id)?.quantity || 0}</h5>

                            </div>
                            <div style={{ width: '80px' }}>
                              <h5 className="mb-0">{product.price}</h5>
                            </div>
                            <NavLink to="/" style={{ color: '#cecece' }}><i className="fas fa-trash-alt"></i></NavLink>
                          </div>
                        </div>
                      </div>
                    </div> 
                  
    </>
  )
}

export default CartDetails