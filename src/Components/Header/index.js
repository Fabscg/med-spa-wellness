import React from 'react'


export default function Header({ currentPage, handlePageChange }) {
    return (
        
            <nav className="navbar navbar-expand-lg bg-outline-primary w3-top">
                <div className="container-fluid">
                <div className='main-title'>
                <h1 className='title'>LAGOONCity</h1>
                <a className="title " href="#">Med-Spa Wellness Inc.</a>
                    
                </div>
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a href="#home"  className={currentPage === "Home" ? "w3-bar-item" : "w3-button"}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a href="#us" className={currentPage === "About-us" ? "w3-bar-item" : "w3-button"}>About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#therapies" className={currentPage === "Therapies" ? "w3-bar-item" : "w3-button"}>Therapies</a>
                            </li>
                            <li className="nav-item">
                                <a href="#book-appointment" className={currentPage === "Book" ? "w3-bar-item" : "w3-button"}>Book</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            
    )
}
