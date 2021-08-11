import React from 'react';
import Card from '../SharedComponents/Card/Card';
import creativity from '../SharedComponents/creativity.svg';
import laptop from '../SharedComponents/laptop.svg';
import solution from '../SharedComponents/solution.svg';


const OurFocus = () => {
    return (
        <div className="OurFocus py-5 my-5" style={{ backgroundColor: '#eee' }}>
            <h2 className="text-secondary fw-normal display-6 text-center">
                Our <span className="text-blue fw-bold">Focus On You</span>
            </h2>
            <p className=" lh-sm pt-3 text-secondary text-center">Attend live online sessions like you are in a classroom, watch live videos, ask questions, join real-time discussions</p>

            <div className="container">
                <div className="row text-secondary">
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card 
                            title='Technical Skills'
                            details='lorem lorem lorem lorem lorem lorem'
                            bgColor='#eee'
                            textCenter= { true }
                        >
                            <img src={laptop} className="w-25 bg-orange rounded p-2" alt="" />
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card 
                            title='Creative Skills'
                            details='lorem lorem lorem lorem lorem lorem'
                            bgColor='#eee'
                            textCenter= { true }
                        >
                            <img src={creativity} className="w-25 bg-green rounded p-2" alt="" />
                        </Card>
                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <Card 
                            title='Practical Experience'
                            details='lorem lorem lorem lorem lorem lorem'
                            bgColor='#eee'
                            textCenter= { true }
                        >
                            <img src={solution} className="w-25 bg-warning rounded p-2" alt="" />
                        </Card>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
        </div>
    );
};

export default OurFocus;