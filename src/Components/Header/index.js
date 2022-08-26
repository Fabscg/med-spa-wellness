
import React from "react";

export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            MED-SPA-WELLNESS
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  href="#home"
                  aria-current="page"
                  className={
                    currentPage === "Home" ? "nav-link active" : "nav-link btn-info"
                  }
                  onClick={() => handlePageChange("Home")}
                >
                  Home<i class="top-icon fa-solid fa-house"></i>{" "}
                </a>
              </li>
              <li className="nav-item ">
                <a
                  href="#Us"
                  aria-current="page"
                  className={
                    currentPage === "Us" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handlePageChange("Us")}
                >
                  About Us<i class="top-icon fa-solid fa-user"></i>{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#therapies"
                  aria-current="page"
                  className={
                    currentPage === "Therapies" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handlePageChange("Therapies")}
                >
                  Therapies
                  <i class="top-icon fa-solid fa-hand-holding-heart"></i>{" "}
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="#Contact"
                  aria-current="page"
                  className={
                    currentPage === "Home" ? "nav-link active" : "nav-link"
                  }
                  onClick={() => handlePageChange("Contact")}
                >
                  Contact<i class="top-icon fa-solid fa-envelope-open-text"></i>{" "}
                </a>
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>
  );
}
