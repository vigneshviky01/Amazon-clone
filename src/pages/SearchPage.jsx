import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../components/ProductCard";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(""); // Sorting state
  const [priceFilters, setPriceFilters] = useState([]); // Multiple price filters state

  const query = searchParams.get("q")?.toLowerCase().trim();
  const category = searchParams.get("category")?.toLowerCase().trim();

  // Function to handle price filter checkbox changes
  const handlePriceFilterChange = (filterValue) => {
    setPriceFilters(prevFilters => 
      prevFilters.includes(filterValue)
        ? prevFilters.filter(filter => filter !== filterValue)
        : [...prevFilters, filterValue]
    );
  };

  useEffect(() => {
    let results = products;

    // Filter by query
    if (query && query !== "") {
      results = results.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.description.some((desc) => desc.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (category && category !== "all") {
      results = results.filter((product) =>
        product.category.toLowerCase().includes(category)
      );
    }

    // Filter by price with multiple selections
    if (priceFilters.length > 0) {
      results = results.filter((product) => 
        priceFilters.some(filter => {
          switch(filter) {
            case "below-100":
              return product.price < 100;
            case "below-500":
              return product.price < 500;
            case "below-1000":
              return product.price < 1000;
            case "above-1000":
              return product.price >= 1000;
            default:
              return true;
          }
        })
      );
    }

    // Sorting logic
    if (sortOrder === "low-to-high") {
      results = [...results].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "high-to-low") {
      results = [...results].sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(results);
  }, [query, category, priceFilters, sortOrder]);

  return (
    <div style={{marginTop:"20px"}} className="container  padding-top-on-section">
      <h2 className="mb-3">Search Results: "{query || category}"</h2>

      {/* ✅ Filters Section */}
      <div className="filters mb-4">
        <h5>Filter by Price:</h5>
        <div className="d-flex gap-3">
          <label>
            <input
              type="checkbox"
              value="below-100"
              checked={priceFilters.includes("below-100")}
              onChange={() => handlePriceFilterChange("below-100")}
            />{" "}
            Below ₹100
          </label>

          <label>
            <input
              type="checkbox"
              value="below-500"
              checked={priceFilters.includes("below-500")}
              onChange={() => handlePriceFilterChange("below-500")}
            />{" "}
            Below ₹500
          </label>

          <label>
            <input
              type="checkbox"
              value="below-1000"
              checked={priceFilters.includes("below-1000")}
              onChange={() => handlePriceFilterChange("below-1000")}
            />{" "}
            Below ₹1000
          </label>

          <label>
            <input
              type="checkbox"
              value="above-1000"
              checked={priceFilters.includes("above-1000")}
              onChange={() => handlePriceFilterChange("above-1000")}
            />{" "}
            Above ₹1000
          </label>
        </div>

        {/* ✅ Sorting Dropdown */}
        <h5 className="mt-3">Sort by Price:</h5>
        <select
          className="form-select w-auto"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="">Select</option>
          <option value="low-to-high">Price: Low to High</option>
          <option value="high-to-low">Price: High to Low</option>
        </select>
      </div>

      {/* ✅ Display Results */}
      <p>
        {filteredProducts.length} product
        {filteredProducts.length !== 1 ? "s" : ""} found
      </p>

      {filteredProducts.length === 0 ? (
        <p>No products found matching your search query.</p>
      ) : (
        <div className="row">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;