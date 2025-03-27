import React from 'react'
import { Link } from "react-router-dom";

const Logobar = () => {
  return (
    <div className="w-100 bg-dark d-flex justify-content-center py-3">
        <Link className="navbar-brand me-4" to="/">
            <img
              alt="Amazon Logo"
              style={{ height: "35px", width: "auto" }}
              className="img-fluid align-middle"
              src="/assets/logo/White-Amazon-Logo.png"
            />
          </Link>
    </div>

  )
}

export default Logobar