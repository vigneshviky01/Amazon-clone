import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IncreaseItemInQuantity, addToCart } from "../features/cart/cartSlice";
import { useTheme } from "../context/ThemeContext"; // Import Theme Context

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();
  const [cartItemQuantity, setCartItemQuantity] = useState(0);
  const [showToast, setShowToast] = useState(false);

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
  console.log(product);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (cartItemQuantity === 0) {
      dispatch(
        addToCart({
          item: {
            id: product.id,
            price: product.price,
            image: product.image,
            title: product.name,
            quantity: quantity,
          },
        })
      );
    } else {
      dispatch(IncreaseItemInQuantity({ id, quantity }));
    }
    // Show Bootstrap toast
    setShowToast(true);

    // Automatically hide toast after 3 seconds
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };
  const id = product.id;
  return (
    <>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card border-0">
            <img
              src={product.image || "/placeholder.svg"}
              className="img-fluid rounded"
              alt={product.name}
            />
          </div>
        </div>

        <div className="col-md-5 mb-4">
          <h2>{product.name}</h2>
          <span className="badge bg-warning text-dark me-2">
            {product.category}
          </span>
          <h3 className="h4 mt-3">₹ {product.price}</h3>

          <h5 className="mt-4">Specifications</h5>
          <table
            className={`table table-bordered table-${
              theme === "light" ? "light" : "dark"
            }`}
          >
            <tbody>
              {Object.entries(product.specs).map(([key, value]) => (
                <tr key={key}>
                  <td className="fw-bold">{key}</td>
                  <td>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h5>About this item</h5>
          <ul>
            {product.description.map((desc, index) => (
              <li key={index}>{desc}</li>
            ))}
          </ul>
        </div>

        <div className="col-md-3">
          <div
            className={`card bg-${theme === "light" ? "light" : "dark"} text-${
              theme === "dark" ? "light" : "dark"
            }`}
          >
            <div className="card-body">
              <h5 className="card-title">Order Summary</h5>
              <p>Price: ₹ {product.price}</p>
              <p className="text-success">In Stock</p>
              <p>Sold by: {product.specs.brand}</p>

              <label htmlFor="quantity">Quantity</label>
              <select
                className="form-select"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
              >
                {[...Array(product.quantity).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1}
                  </option>
                ))}
              </select>

              <button
                type="button"
                className="btn btn-warning text-dark w-100 my-4"
                id="liveToastBtn"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="toast-container position-fixed top-0 end-0 p-3 ">
        <div
          id="liveToast"
          className={`toast ${showToast ? 'show' : ''}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-body bg-success text-white fw-bold">
            {product.name} is successfully added to the cart.
            <button
              type="button"
              className="btn-close btn-close-white float-end text-white"
              onClick={() => setShowToast(false)}
              aria-label="Close"
            ></button>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
