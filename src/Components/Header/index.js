import React from 'react'
import { GrMail } from "react-icons/gr"


export default function Header({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg w3-top w3-bar w3-white w3-padding w3-opacity-min w3-hover-opacity-off">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">MED-SPA WELLNESS</a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="true"
            aria-label="Toggle navigation" aria-controls="navbarNavDropdown">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">

                <a href="#Home" aria-current="page" className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}

                  onClick={() => handlePageChange('Home')}>Home<i className="top-icon fa-solid fa-house"></i> </a>
              </li>
              <li className="nav-item">
                <a href="#Us" className={currentPage === 'Us' ? 'nav-link' : 'nav-link'}

                  onClick={() => handlePageChange('Us')}>About Us<i className="top-icon fa-solid fa-user"></i> </a>
              </li>
              <li className="nav-item">
                <a href="#therapies" className={currentPage === 'Therapies' ? 'nav-link' : 'nav-link'}

                  onClick={() => handlePageChange('Therapies')}>Therapies<i className="top-icon fa-solid fa-hand-holding-heart"></i> </a>
              </li>
              <li className="nav-item">
                <a href="#Contact" className={currentPage === 'Contact' ? 'nav-link' : 'nav-link'}

                  onClick={() => handlePageChange('Contact')}>Contact<i className='top-icon'><GrMail /></i> </a>
              </li>

            </ul>
          </div>
        </div>

      </nav>


    </div>
  );
}
