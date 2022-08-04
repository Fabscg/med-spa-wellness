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
                                <a href="#home
                                " className={currentPage === "Home" ? "nav-link active" : "nav-link"}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#us" className={currentPage === "About-us" ? "nav-link" : "nav-link"}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#therapies" className={currentPage === "Therapies" ? "nav-link" : "nav-link"}>Therapies</a>
                            </li>
                            <li className="nav-item">
                                <a href="#book-appointment" className={currentPage === "Book" ? "nav-link" : "nav-link"}>Book</a>
                            </li>

                        </ul>
                    </div>
                </div>
                
            </nav>

        </div>

    )
}
