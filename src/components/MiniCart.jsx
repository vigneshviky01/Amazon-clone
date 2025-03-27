import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// Local imports
import { hideCart, clearCart } from "../features/cart/cartSlice";
import CartItem from "./CartItem";
import { useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

const MiniCart = () => {
  const { cartItems, total, quantity } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const {theme} =useTheme();
 const navigate = useNavigate();

  return (
    <>
      <div 
        className={`position-fixed top-0 end-0 z-3 w-100 vh-100 bg-${theme === "light" ? "white" : "dark"} d-flex flex-column overflow-auto`}
        style={{ maxWidth: '375px',paddingTop:"60px" }}
      >
        <div className="w-100 d-flex justify-content-between align-items-center p-3">
          <i
            className="bi bi-arrow-left text-secondary fs-3"
            role="button"
            onClick={() => dispatch(hideCart())}
          />
          <p className=" align-middle fs-5 fw-semibold mb-0">Cart</p>
          <div
            className="d-flex align-items-center gap-2 p-1 px-2 my-2 bg-danger rounded text-white "
            role="button"
            onClick={() => dispatch(clearCart())}
          >
            Clear <i className="bi bi-arrow-clockwise" />
          </div>
        </div>
        <div className="w-100 d-flex justify-content-between align-items-center py-3 px-5">
            <button onClick={()=>{navigate("/cart")}} className="btn btn-light border border-black border-1 rounded-5 w-100 ">Go To Cart</button>
        </div>

        <div className="flex-grow-1 overflow-auto">
          {quantity > 0 ? (
            <div className="w-100 px-3 " style={{marginBottom:"100px"}}>
              {cartItems.map((item) => (
                <CartItem key={item.id} {...item} />
              ))}
            </div>
          ) : (
            <div className="d-flex flex-column justify-content-center align-items-center h-100 pt-5">
              <img
                src="/assets/cartEmpty.jpg"
                className="img-fluid"
                style={{ maxWidth: '300px', maxHeight: '300px' }}
                alt="Empty Cart"
              />
              <h2 className="fw-semibold fs-4 mt-3">Continue Shopping</h2>
            </div>
          )}
        </div>
      </div>

      {quantity > 0 && (
        <div className="position-fixed bottom-0 end-0 bg-warning pt-4 pb-4 d-flex flex-column w-100 z-3"
             style={{ maxWidth: '375px' }}
        >
          <h4 className="d-flex justify-content-between align-items-center px-4 mb-3 text-dark">
            Total{" "}
            <span>
              <i className="bi bi-currency-rupee mb-1" />
              {total}
            </span>
          </h4>
         
        </div>
      )}

      
    </>
  );
};

export default MiniCart;