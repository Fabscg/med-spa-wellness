import React, { useState } from 'react';
import { therapyList } from './therapyList'


export default function Therapies() {
    return (

        <div className='section-services'>
            <div >
                <h2 className='sevices-title' id="#therapies">THERAPIES</h2>
            </div>
            <div className="card-services mb-3">
                {
                    therapyList.map((therapyList) => (
                        <div className="row g-0 card-container">

                            <div className="col-md-4">


                                <img src={therapyList.imgURL} className="img-fluid rounded-start" alt="massage services" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{therapyList.therapyName}</h5>
                                    <p className="card-text">{therapyList.description}</p>
                                    <button className="card-text btn btn-dark btn-lg"><large className="">{therapyList.price}</large></button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>


    )
}
