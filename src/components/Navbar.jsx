import React, { useState, memo } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { showCart } from "../features/cart/cartSlice";
import ThemeToggleButton from "./ThemeToggleButton";
const Navbar = memo(() => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchString, setSearchString] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
    navigate(`/search?category=${category}`);
  };
  const { quantity } = useSelector((store) => store.cart);
  return (
    <>
      <nav
        style={{ zIndex: 100, marginBottom: "100px" }}
        className="navbar navbar-expand-lg navbar-dark bg-dark text-white py-2 position-fixed top-0 w-100 "
      >
        <div className="container-fluid px-3">
          {/* Navbar Toggle for Mobile */}
          <button
            className="navbar-toggler me-2"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mobileNavbar"
            aria-controls="mobileNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Amazon Logo */}
          <Link className="navbar-brand me-4" to="/">
            <img
              alt="Amazon Logo"
              style={{ height: "35px", width: "auto" }}
              className="img-fluid align-middle"
              src="/assets/logo/White-Amazon-Logo.png"
            />
          </Link>

          {/* Search Bar */}
          <div
            className="d-none d-lg-flex me-4"
            style={{ maxWidth: "50%", flexGrow: 1 }}
          >
            <div className="input-group input-group-sm">
              <div style={{ width: "max-content" }}>
                <select
                  style={{
                    borderTopRightRadius: 0,
                    borderBottomRightRadius: 0,
                  }}
                  className="form-select bg-light hover:bg-warning"
                  value={selectedCategory}
                  onChange={handleCategoryChange} // Handle selection change
                >
                  <option value="All">All</option>
                  <option value="Amazon Fashion">Amazon Fashion</option>
                  <option value="Toys & Games">Toys & Games</option>
                  <option value="Beauty">Beauty</option>
                </select>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Search Amazon.com"
                value={searchString}
                onChange={(event) => setSearchString(event.target.value)}
                onKeyDown={(event) => {
                  if (event.key === "Enter") {
                    navigate(`/search?q=${searchString}`);
                  }
                }}
                style={{
                  borderLeft: "none",
                  borderRight: "none",
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,
                }}
              />
              <span
                onClick={() => navigate(`/search?q=${searchString}`)}
                className="input-group-text btn btn-warning border-0 align-middle pt-2 px-3"
              >
                <i className="bi bi-search"></i>
              </span>
            </div>
          </div>

          {/* User Actions for Large Screens */}
          <div className="d-flex align-items-center">
            <Link
              to="/login"
              className="text-white text-decoration-none me-lg-5 me-2"
            >
              <small>Hello, sign in</small>
              <div className="fw-bold d-none d-lg-block">Account & Lists</div>
            </Link>
            <button
              onClick={() => {
                dispatch(showCart());
              }}
              className="d-none d-md-flex rounded bg-transparent text-white border-0 d-flex align-items-center position-relative me-3"
            >
              <i className="bi bi-cart me-1 fs-3"></i>
              <span className="fw-bold fs-6 position-absolute top-2 start-100 translate-middle badge border border-light text-dark bg-warning rounded-circle px-2 py-1">
                {quantity}
              </span>
            </button>
            <button
              onClick={() => {
                navigate("/cart");
              }}
              className=" d-block d-md-none rounded bg-transparent text-white border-0 align-items-center position-relative me-3"
            >
              <i className="bi bi-cart me-1 fs-3"></i>
              <span className="fw-bold fs-6 position-absolute top-2 start-100 translate-middle badge border border-light text-dark bg-warning rounded-circle px-2 py-1">
                {quantity}
              </span>
            </button>
          </div>
        </div>
        {/* mobile view */}
        <div className="d-flex  justify-content-center align-items-center w-100 d-lg-none mx-4 py-3 ">
          <div className="w-100 input-group input-group-sm ">
            <div style={{ width: "130px" }}>
              <select
                style={{
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                }}
                className="form-select bg-light hover:bg-warning"
                value={selectedCategory}
                onChange={handleCategoryChange} // Handle selection change
              >
                <option value="All">All</option>
                <option value="Amazon Fashion">Amazon Fashion</option>
                <option value="Toys & Games">Toys & Games</option>
                <option value="Beauty">Beauty</option>
              </select>
            </div>
            <input
              type="text"
              className="form-control py-1"
              placeholder="Search Amazon.com"
              value={searchString}
              onChange={(event) => setSearchString(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  navigate(`/search?q=${searchString}`);
                }
              }}
              style={{
                borderLeft: "none",
                borderRight: "none",
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            />
            <span
              onClick={() => navigate(`/search?q=${searchString}`)}
              className="input-group-text btn btn-warning border-0 align-middle pt-2 px-3"
            >
              <i className="bi bi-search"></i>
            </span>
          </div>
        </div>
        <div className="d-none d-lg-flex">
          <ThemeToggleButton />
        </div>
      </nav>

      {/* Mobile Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-start  text-white"
        tabIndex="-1"
        id="mobileNavbar"
        aria-labelledby="mobileNavbarLabel"
      >
        <div className="offcanvas-header bg-dark">
          <div className="d-flex align-items-center justify-content-between w-100">
            <ThemeToggleButton />
            <Link
              to="/login"
              className="text-white text-decoration-none d-flex align-items-center"
              onClick={() => {
                const offcanvas = document.getElementById("mobileNavbar");
                if (offcanvas) {
                  // Remove show class
                  offcanvas.classList.remove("show");

                  // Remove all backdrops
                  const backdrops = document.querySelectorAll(
                    ".offcanvas-backdrop"
                  );
                  backdrops.forEach((backdrop) => backdrop.remove());

                  // Remove body classes that Bootstrap adds
                  document.body.classList.remove("offcanvas-open");
                  document.body.style.overflow = "";
                  document.body.style.paddingRight = "";
                }
              }}
            >
              <i className="bi bi-person-circle me-2 fs-4"></i>
              <div className="">
                <small className="pe-3">Hello, Sign In</small>
              </div>
            </Link>
          </div>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div className="offcanvas-body p-0">
          <div className="list-group list-group-flush">
            <div className="list-group-item list-group-item-action  text-black border-0 bg-dark text-white">
              <h6 className="">
                Browse <br />
                <span className="h5">Amazon</span>
              </h6>
            </div>

            <Link
              to="/"
              className="list-group-item list-group-item-action  text-black border-0 d-flex align-items-center"
            >
              <i className="bi bi-house me-3"></i> Amazon Home
            </Link>

            <div className="list-group-item list-group-item-action  text-black border-0">
              <h6 className="text-dark fw-bold">Trending</h6>
            </div>

            <Link
              to="/bestsellers"
              className="list-group-item list-group-item-action  text-black border-0"
            >
              Bestsellers
            </Link>
            <Link
              to="/new-releases"
              className="list-group-item list-group-item-action  text-black border-0"
            >
              New Releases
            </Link>
            <Link
              to="/movers-shakers"
              className="list-group-item list-group-item-action  text-black border-0"
            >
              Movers and Shakers
            </Link>
            <hr className="my-3 border border-black border-2" />
            <div className="list-group-item list-group-item-action  text-black border-0">
              <h6 className="text-dark fw-bold">Top Categories for You</h6>
            </div>

            <Link
              to="/mobiles"
              className="list-group-item list-group-item-action  text-black border-0"
            >
              Mobiles
            </Link>
            <Link
              to="/computers"
              className="list-group-item list-group-item-action  text-black border-0"
            >
              Computers
            </Link>
            <Link
              to="/books"
              className="list-group-item list-group-item-action  text-black border-0"
            >
              Books
            </Link>
            <Link
              to="/fashion"
              className="list-group-item list-group-item-action  text-black border-0"
            >
              Amazon Fashion
            </Link>

            <Link
              to="/categories"
              className="list-group-item list-group-item-action  text-black border-0 text-warning"
            >
              See All Categories
            </Link>
          </div>
        </div>

        <div className="offcanvas-footer p-3">
          <Link
            to="/cart"
            className="btn btn-outline-light w-100 d-flex justify-content-center align-items-center"
          >
            <i className="bi bi-cart me-2"></i> Cart
          </Link>
        </div>
      </div>
    </>
  );
});

export default Navbar;
