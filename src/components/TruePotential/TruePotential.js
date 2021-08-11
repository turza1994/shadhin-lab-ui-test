import React from 'react';
import '../../style.css';

const TruePotential = () => {
    return (
        <div className="TruePotential pt-4 mt-5" style={{ backgroundColor: 'rgb(255, 169, 71)' }} >
            <div className="container">
                <div className="row align-items-center justify-content-center" style={{ height: '90vh' }}>
                    <div className="col-12 col-sm-5 lh-lg" style={{ paddingLeft: '3vw' }}>
                        <h2 className="text-white fw-normal display-5">
                            Explore your <br /> <span className="fw-bolder">TRUE POTENTIAL!</span>
                        </h2>
                        <p className="pt-3 text-blue lh-sm">If you really good at something, take it further! Share your skill and knowledge. Your upside is imaginable.</p>
                        <button className="btn btn-light fs-6 mt-3 py-3 px-5 text-blue fw-bolder">START LEARNING TODAY!</button>
                    </div>

                    <div className="col-12 col-sm-7 d-flex justify-content-center align-items-center">
                        <img className="w-75 img-fluid header-img rounded" src="team.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TruePotential;