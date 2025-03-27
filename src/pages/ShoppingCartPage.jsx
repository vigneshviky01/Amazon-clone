import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "../styles/shoppingCartPage.css";
import { removeItem, increase, decrease, clearCart } from "../features/cart/cartSlice";
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
const ShoppingCartPage = () => {
  const { cartItems, total, quantity } = useSelector((store) => store.cart);
    const { theme } = useTheme();
  
  const dispatch = useDispatch();
const navigate =useNavigate();
  const renderCartItems = () => {
    return cartItems.map((item) => (
      <div key={item.id} className={`card mb-3 bg-${theme === "light" ? "light" : "dark"} text-${theme === "dark" ? "white" : "dark"}`}>
        <div className="card-body d-flex flex-column flex-md-row align-items-center">
          <div className="cart-item-image me-md-4 mb-3 mb-md-0 text-center">
            <img 
              src={item.image} 
              alt={item.title} 
              className="img-fluid rounded responsive-image" 
             
            />
          </div>
          
          <div className="cart-item-details flex-grow-1 text-center text-md-start">
            <h4 className="card-title fs-5 mb-2">{item.title}</h4>
            <p className="card-text mb-2">
              <i className="bi bi-currency-rupee" />
              {item.price}
            </p>
            <button
              className="btn btn-danger btn-sm mb-2"
              onClick={() => dispatch(removeItem(item.id))}
            >
              Remove
            </button>
          </div>
          
          <div className="cart-item-quantity d-flex align-items-center mt-3 mt-md-0">
            <button
              className="btn btn-outline-secondary btn-sm me-2"
              onClick={() => {
                if (item.quantity === 1) {
                  dispatch(removeItem(item.id));
                } else {
                  dispatch(decrease({ id: item.id }));
                }
              }}
             
            >
              <i className="bi bi-dash" />
            </button>
            
            <span className="fw-bold mx-2">{item.quantity}</span>
            
            <button
              className="btn btn-outline-secondary btn-sm ms-2"
              onClick={() => dispatch(increase({ id: item.id }))}
            >
              <i className="bi bi-plus" />
            </button>
          </div>
        </div>
      </div>
    ));
  };

  const renderEmptyCart = () => (
    <div className="container text-center py-5">
      <img
        src="/assets/cartEmpty.jpg"
        className="img-fluid mb-4"
        style={{ maxWidth: '300px', maxHeight: '300px' }}
        alt="Empty Cart"
      />
      <h2 className="fw-semibold mb-3">Your Cart is Empty</h2>
      <p className="text-muted mb-4">Looks like you haven't added any items to your cart yet.</p>
      <button onClick={()=>{navigate('/')}}  className="btn btn-warning ">Continue Shopping</button>
    </div>
  );

  return (
    <div style={{marginTop:"20px"}} className="container-fluid padding-top-on-section">
      <div className="row">
        <div className="col-12 col-lg-8 mb-4 mb-lg-0">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="fs-3 fw-bold">Shopping Cart</h1>
            {quantity > 0 && (
              <button 
                className="btn btn-outline-danger"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart <i className="bi bi-trash ms-2" />
              </button>
            )}
          </div>
          
          {quantity > 0 ? renderCartItems() : renderEmptyCart()}
        </div>
        
        {quantity > 0 && (
          <div className="col-12 col-lg-4">
            <div className={`card bg-${theme === "light" ? "light" : "dark"} text-${theme === "dark" ? "white" : "dark"}`}>
              <div className="card-body">
                <h3 className="card-title mb-4">Order Summary</h3>
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Subtotal ({quantity} items)</span>
                  <span>
                    <i className="bi bi-currency-rupee" />
                    {total}
                  </span>
                </div>
                
                <div className="d-flex justify-content-between mb-2">
                  <span>Shipping</span>
                  <span className="text-success">Free</span>
                </div>
                
                <hr />
                
                <div className="d-flex justify-content-between fw-bold">
                  <span>Total</span>
                  <span>
                    <i className="bi bi-currency-rupee" />
                    {total}
                  </span>
                </div>
                
                <button onClick={()=>{navigate("/checkout")}} style={{backgroundColor:"#ffd814"}} className="btn text-dark  w-100 mt-4">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShoppingCartPage;