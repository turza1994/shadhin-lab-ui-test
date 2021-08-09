import React from 'react';
import '../../style.css'

const WhyAreYouHere = () => {
    return (
        <div className="WhyAreYouHere py-5 my-5 text-secondary">
            <p className="text-center text-lightGrey lh-1 lead">Over 12345+ Courses</p>
            <h2 className="text-center display-5 fw-bold lh-1">Why You Are Here ?</h2>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <div className="card mt-5 rounded shadow-lg mx-auto" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <img src="rating 1 1.png" className="w-25" alt="" />
                                <h5 className="card-title pt-4">Taught by Industry Experts</h5>
                                <p className="card-text lh-sm pt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card mt-5 rounded shadow-lg mx-auto" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <img src="online-learning 1.png" className="w-25" alt="" />
                                <h5 className="card-title pt-4"></h5>
                                <p className="card-text lh-sm pt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card mt-5 rounded shadow-lg mx-auto" style={{ width: '18rem' }}>
                            <div className="card-body">
                                <img src="webinar 1 1.png" className="w-25" alt="" />
                                <h5 className="card-title pt-4">Flexible and Affordable</h5>
                                <p className="card-text lh-sm pt-3">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyAreYouHere;