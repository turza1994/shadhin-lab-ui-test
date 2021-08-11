import React from 'react';
import Card from '../SharedComponents/Card/Card';
import '../../style.css'
import rating1 from '../SharedComponents/rating 1.svg';
import onlineLearning from '../SharedComponents/online-learning 1.svg';
import vector70 from  '../SharedComponents/Vector 70 (Stroke)2.svg';
import vector71 from '../SharedComponents/Vector 71 (Stroke).svg';
import vector68 from '../SharedComponents/Vector 68.svg';
import vector68Stroke from '../SharedComponents/Vector 68 (Stroke).svg';
import vector69Stroke from '../SharedComponents/Vector 69 (Stroke).svg';

const WhyAreYouHere = () => {
    return (
        <div className="WhyAreYouHere py-4 my-4 text-secondary">
            <p className="text-center text-lightGrey lh-1 lead">Over 12345+ Courses</p>
            <h2 className="text-center display-6 fw-bolder lh-1">Why You Are Here ?</h2>
            <br />

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card 
                            title="Taught by Industry Experts"
                            details="Some quick example text to build on the card title and make up the bulk of the card's content."
                            style={{ position: 'relative' }}
                        >   
                            <img src={vector68Stroke} alt="" style={{ position: 'absolute', top: '30px', right: '-100px', zIndex: '1' }} />
                            <img src={vector70} alt="" style={{ position: 'absolute', top: '0', right: 0 }}/>
                            <img src={rating1} className="w-25 bg-orange p-1 rounded" alt="" />
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card 
                            title=""
                            details="Some quick example text to build on the card title and make up the bulk of the card's content."
                            style={{ position: 'relative' }}
                        >
                            <img src={vector69Stroke} alt="" style={{ position: 'absolute', top: '60px', right: '-100px', zIndex: '1' }} />
                            <img src={vector71} alt="" style={{ position: 'absolute', bottom: '0', right: 0 }}/>
                            <img src={onlineLearning} className="w-25" alt="" />
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card 
                            title="Flexible and Affordable"
                            details="Some quick example text to build on the card title and make up the bulk of the card's content."
                            style={{ position: 'relative' }}
                        >
                            <img src={vector68} alt="" style={{ position: 'absolute', top: '0', right: 0 }}/>
                            <img src="webinar 1 1.png" className="w-25" alt="" />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyAreYouHere;