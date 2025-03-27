import React, { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import productsData from "../data/products"; 

const ProductGrid = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    
      setProducts(productsData);
      setLoading(false); 
  }, []);

  return (
    <div className="container d-flex flex-column gap-3 mt-5">
      <h2>Featured Products</h2>

      {loading ? (
        <div className="text-center my-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading products...</p>
        </div>
      ) : (
        <div className="row">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
