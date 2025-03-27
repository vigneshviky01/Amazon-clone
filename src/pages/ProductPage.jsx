import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import ProductDetail from "../components/ProductDetail";
import products from "../data/products"; 
import { useTheme } from "../context/ThemeContext";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { theme } = useTheme();
  useEffect(() => {
    const foundProduct = products.find((p) => p.id.toString() === id);
    setProduct(foundProduct || products[0]);
  }, [id, products]);

  if (!product) return <div className="container py-5 text-center">Loading...</div>;

  return (
    <div style={{marginTop:"20px"}} className="container padding-top-on-section">
      <h2 className="border-bottom pb-2">Product Details</h2>
      <ProductDetail product={product} />

      <h3 className="mt-5 mb-3">Related Products</h3>
      <div className="row">
        {products
          .filter((p) => p.category === product.category && p.id !== product.id)
          .slice(0, 6)
          .map((relatedProduct) => (
            <div className="col-lg-2 col-md-4 col-sm-6 col-6 mb-3" key={relatedProduct.id}>
              <Link to={`/product/${relatedProduct.id}`} className="text-decoration-none">
              <div className={`card h-100 bg-${theme === "dark" ? "dark" : "light"} text-${theme === "dark" ? "light" : "dark"}`}>
              <img
                    src={relatedProduct.image || "/public/assets/placeholder.svg"}
                    className="card-img-top"
                    alt={relatedProduct.name}
                    style={{ height: "120px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h6 className="card-title ">{relatedProduct.name}</h6>
                    <p className="card-text">{relatedProduct.price}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
