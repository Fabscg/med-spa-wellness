import React, { useState } from 'react';
import { therapyList } from './therapyList'

export default function Therapies() {
    return (
        <div className='container-therapy'>
            {
                therapyList.map((therapyList) => (
                    <div className="card mb-3 text-bg-dark">
                        <img src={therapyList.imgURL} className="card-img-top" alt="massage services" />
                        <div className="card-img-overlay">
                            <h5 className="card-title">{therapyList.therapyName}</h5>
                            <p className="card-text">{therapyList.description}</p>
                            <p className="card-text">60 min - $130</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
