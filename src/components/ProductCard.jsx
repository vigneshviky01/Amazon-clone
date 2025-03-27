import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../context/ThemeContext"; // Import Theme Context

import "../styles/productCard.css";
import {
  addToCart,
  increase,
  decrease,
  removeItem,
} from "../features/cart/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const [cartItemQuantity, setCartItemQuantity] = useState(0);
  const { cartItems } = useSelector((store) => store.cart);
  const { theme } = useTheme(); // Get current theme

  useEffect(() => {
    const itemInCart = cartItems.find((cartItem) => cartItem.id === product.id);

    // If the item is in the cart, set the cartItem state
    if (itemInCart) {
      setCartItemQuantity(itemInCart.quantity);
    } else {
      // If the item is not in the cart, set cartItem to a default value
      setCartItemQuantity(0);
    }
  }, [cartItems, product.id]);
  const navigate = useNavigate();


  
  const id = product.id;
  return (
    <div className={`col-12 col-sm-6 col-md-4 col-xl-3 mb-4 ${theme}-mode`}>
      <div className={`card h-100 product-card bg-${theme}`}>
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image || "/placeholder.svg"}
            className="card-img-top product-image"
            alt={product.name}
          />
        </Link>
        <div className="card-body text-center">
          <Link
            to={`/product/${product.id}`}
            className={`text-decoration-none text-${theme === "dark" ? "white" : "dark"}`}
          >
            <h5 className="card-title">{product.name}</h5>
          </Link>
          <p className={`text-${theme === "dark" ? "white" : "dark"} card-text`}>₹ {product.price}</p>

         

          {cartItemQuantity === 0 ? (
            <button
              className="btn btn-warning w-100 mb-2"
              onClick={() => {
                dispatch(
                  addToCart({
                    item: {
                      id: product.id,
                      price: product.price,
                      image: product.image,
                      title: product.name,
                      quantity: 1,
                    },
                  })
                );
              }}
            >
              Add to Cart
            </button>
          ) : (
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
              <button
                className={`bg-warning text-${theme === "dark" ? "white" : "dark"} rounded-circle d-flex align-items-center justify-content-center border-0 pb-1 `}
                style={{ width: "35px", height: "35px" }}
                onClick={() => {
                  if (cartItemQuantity === 1) {
                    dispatch(removeItem(id));
                    return;
                  }
                  dispatch(decrease({ id }));
                }}
              >
                -
              </button>

              <p className={`text-${theme === "dark" ? "white" : "dark"} fs-3 align-middle mt-2 py-2`}>{cartItemQuantity}</p>
              <button
                className={`bg-warning text-${theme === "dark" ? "white" : "dark"} rounded-circle d-flex align-items-center justify-content-center border-0 pb-1`}
                style={{ width: "35px", height: "35px" }}
                onClick={() => {
                  dispatch(increase({ id }));
                }}
              >
                +
              </button>
            </div>
          )}
          <button
            className="btn btn-outline-secondary w-100"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
