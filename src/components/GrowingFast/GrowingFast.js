import React from 'react';

const GrowingFast = () => {
    return (
        <div className="container rounded my-5 py-4" style={{ backgroundColor: '#E6F8E3', backgroundImage: "url('Group 30605.png')", width: '60%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-7 d-flex justify-content-center align-items-center">
                        <h2 className="fw-bold">We are growing fast!</h2>
                    </div>
                    <div className="col-12 col-sm-5 d-flex flex-column justify-content-center align-items-center">
                        <h2 className="display-6 fw-bold lh-1">99250</h2>
                        <p className="fs-5 text-dark lh-1">Students</p>
                        <button className="btn btn-success bg-green px-5">JOIN NOW!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GrowingFast;