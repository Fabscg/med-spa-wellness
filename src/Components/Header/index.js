import React from 'react'


export default function Header({ currentPage, handlePageChange }) {
    return (
        <div className="w3-top w3-hide-small">
            <div className="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
                <a href="#home" className={currentPage === "Home" ? "w3-bar-item" : "w3-button"}>Home</a>
                <a href="#us" className={currentPage === "About-us" ? "w3-bar-item" : "w3-button"}>About Us</a>
                <a href="#home" className={currentPage === "Therapies" ? "w3-bar-item" : "w3-button"}>Therapies</a>
                <a href="#book-appointment" className={currentPage === "Home" ? "w3-bar-item" : "w3-button"}>Book</a>
            </div>
            <div>
                <span>Lagoon City</span>
                <h1 className='title'>MED-SPA WELLNESS INC.</h1>
            </div>

        </div>

    )
}
