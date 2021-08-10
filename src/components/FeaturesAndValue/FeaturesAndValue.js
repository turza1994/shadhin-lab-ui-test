import React from 'react';
import Card from '../SharedComponents/Card/Card';

const FeaturesAndValue = () => {
    return (
        <div className="FeaturesAndValue pb-5 mb-5" style={{ position: 'relative' }} >
            <img src="Rectangle 7.png" className="" alt="" style={{width: '45%', position: 'absolute', right: '0', top:'20vh' }} />
            <h2 className="display-6 text-secondary fw-normal text-center">World-Class Learning Features and Value</h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-4">
                        <Card
                            title="Top Rated Courses"
                            details="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
                            textCenter= {true}
                        >
                            <img src="online-learning 1.png" className="w-25" alt="" />
                        </Card>
                    </div>
                    <div className="col-12 col-sm-4">
                        <Card
                            title="Team of Experts"
                            details="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
                            textCenter= {true}
                        >
                            <img src="online-learning 1.png" className="w-25" alt="" />
                        </Card>
                    </div>
                    <div className="col-12 col-sm-4">
                        <Card
                            title="24/7 Online Support"
                            details="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
                            textCenter= {true}
                        >
                            <img src="online-learning 1.png" className="w-25" alt="" />
                        </Card>
                    </div>    
                    <div className="col-12 col-sm-4">
                        <Card
                            title="Work Globally"
                            details="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
                            textCenter= {true}
                        >
                            <img src="online-learning 1.png" className="w-25" alt="" />
                        </Card>
                    </div>
                    <div className="col-12 col-sm-4">
                        <Card
                            title="100% Verified Content"
                            details="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
                            textCenter= {true}
                        >
                            <img src="online-learning 1.png" className="w-25" alt="" />
                        </Card>
                    </div>
                    <div className="col-12 col-sm-4">
                        <Card
                            title="Certification"
                            details="lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem"
                            textCenter= {true}
                        >
                            <img src="online-learning 1.png" className="w-25" alt="" />
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeaturesAndValue;