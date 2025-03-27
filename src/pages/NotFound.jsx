import React from 'react'
import { Link } from 'react-router-dom'
const NotFound = () => {
  return (
    <div
  style={{ minHeight: "100vh", marginTop: "auto" }}
  className="container d-flex flex-column justify-content-center align-items-center text-center gap-3"
>
  <h1>404 - Page Not Found</h1>
  <p>The page you are looking for does not exist.</p>
  <Link to="/" className="btn btn-warning px-5">Go to Home</Link>
</div>

  )
}

export default NotFound