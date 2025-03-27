import React from "react";
import { useDispatch } from "react-redux";

// Bootstrap imports
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

import { removeItem, increase, decrease } from "../features/cart/cartSlice";

const CartItem = ({ id, image, title, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <div className="d-flex align-items-center border-bottom py-3">
      <div className="me-3">
        <img 
          src={image} 
          alt={title} 
          className="img-fluid rounded" 
          style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }}
        />
      </div>
      <div className="flex-grow-1">
        <h4 className="mb-2 fs-5">{title}</h4>
        <p className="mb-2">
          <i className="bi bi-currency-rupee" />
          {price}
        </p>
        <button
          className="btn btn-sm btn-danger  text-white"
          onClick={() => dispatch(removeItem(id))}
        >
          Remove
        </button>
      </div>
      <div className="d-flex flex-column align-items-center">
        <button
          className="btn btn-outline-secondary btn-sm mb-2"
          onClick={() => dispatch(increase({ id }))}
        >
          <i className="bi bi-plus" />
        </button>
        <p className="my-2 fw-bold">{quantity}</p>
        <button
          className="btn btn-outline-secondary btn-sm"
          onClick={() => {
            if (quantity === 1) {
              dispatch(removeItem(id));
              return;
            }
            dispatch(decrease({ id }));
          }}
        >
          <i className="bi bi-dash" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;