import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/home">
          Quiz2Quiz
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link className="nav-link active" to="/home">
                Home
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active" to="/blog">
                Blog
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link active" to="/statistics">
                Statistics
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    // <div>
    //   <Link className="nav-link active" to="/home">Home</Link>
    //   <Link className="nav-link active" to="/blog">Blog</Link>
    //   <Link className="nav-link active" to="/statistics">Statistics</Link>
    // </div>
  );
};

export default Header;
