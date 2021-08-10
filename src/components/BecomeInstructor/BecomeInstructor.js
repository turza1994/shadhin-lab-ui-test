import React from 'react';
import '../../style.css'

const BecomeInstructor = () => {
    return (
        <div className="BecomeInstructor py-5 my-5" >

            <div className="container">
                <div className="row align-items-center" style={{ height: '90vh' }}>
                     <div className="col-12 col-sm-6 d-flex justify-content-center align-items-center">
                        <img className="w-75 img-fluid header-img" src="Group 28590.png" alt="" />
                    </div>

                    <div className="col-12 col-sm-6 lh-lg" style={{ paddingLeft: '0vw' }}>
                        <h2 className="text-blue fw-normal display-5">
                            Become <span className="fw-bolder">A Instructor</span>
                        </h2>
                        <p className="lead fw-normal text-secondary">The best way to learn is to teach: Become a Instructor</p>
                        <p className="text-blue lh-sm">If you really good at something, take it further! Share your skill and knowledge. Your upside is imaginable.</p>
                        <button className="btn btn-warning instructor-apply-btn fs-6 mt-3 py-2 px-5">APPLY NOW</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default BecomeInstructor;