import React from 'react'


export default function Header({ currentPage, handlePageChange }) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-outline-primary w3-top w3-hide-small w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
                <div className="container-fluid">


                    <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false
                    " aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#home" aria-current="page" className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}

                                    onClick={() => handlePageChange('Home')}>Home<i class="top-icon fa-solid fa-house"></i> </a>
                            </li>
                            <li className="nav-item">
                                <a href="#Us" aria-current="page" className={currentPage === 'Us' ? 'nav-link active' : 'nav-link'}

                                    onClick={() => handlePageChange('Us')}>About Us<i class="top-icon fa-solid fa-user"></i> </a>
                            </li>
                            <li className="nav-item">
                                <a href="#therapies" aria-current="page" className={currentPage === 'Therapies' ? 'nav-link active' : 'nav-link'}

                                    onClick={() => handlePageChange('Therapies')}>Therapies<i class="top-icon fa-solid fa-hand-holding-heart"></i> </a>
                            </li>
                            <li className="nav-item">
                                <a href="#Contact" aria-current="page" className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}

                                    onClick={() => handlePageChange('Contact')}>Contact<i class="top-icon fa-solid fa-envelope-open-text"></i> </a>
                            </li>

                        </ul>
                    </div>
                </div>

            </nav>

        </div>

    )
}
