import React from 'react';
import Card from '../SharedComponents/Card/Card';
import '../../style.css'

const WhyAreYouHere = () => {
    return (
        <div className="WhyAreYouHere py-4 my-4 text-secondary">
            <p className="text-center text-lightGrey lh-1 lead">Over 12345+ Courses</p>
            <h2 className="text-center display-6 fw-bold lh-1">Why You Are Here ?</h2>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card 
                            title="Taught by Industry Experts"
                            details="Some quick example text to build on the card title and make up the bulk of the card's content."
                        >
                            <img src="rating 1 1.png" className="w-25" alt="" />
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card 
                            title=""
                            details="Some quick example text to build on the card title and make up the bulk of the card's content."
                        >
                            <img src="online-learning 1.png" className="w-25" alt="" />
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card 
                            title="Flexible and Affordable"
                            details="Some quick example text to build on the card title and make up the bulk of the card's content."
                        >
                            <img src="webinar 1 1.png" className="w-25" alt="" />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyAreYouHere;