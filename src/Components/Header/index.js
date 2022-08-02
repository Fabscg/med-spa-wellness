import React from 'react'


export default function Header() {
    return (
        <div className="w3-top w3-hide-small">
            <div className="w3-bar w3-white w3-center w3-padding w3-opacity-min w3-hover-opacity-off">
                <a href="#home" className="w3-bar-item w3-button">Home</a>
                <a href="#us" className="w3-bar-item w3-button">About Us</a>
                <a href="#therapies" className="w3-bar-item w3-button">Therapies</a>
                <a href="#book-appointment" className="w3-bar-item w3-button w3-hover-black">Book</a>
            </div>
            <div>
                <span>Lagoon City</span>
                <h1 className='title'>MED-SPA & WELLNESS INC.</h1>
            </div>

        </div>

    )
}
