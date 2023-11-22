import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link" href="#">
              Home
            </a>
            <a class="nav-link" href="#">
              The Team
            </a>
            <a class="nav-link" href="#">
              Our Mission
            </a>
            <a class="nav-link ">Get in Touch</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
