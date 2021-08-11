import React from 'react';

const SubscribeNewsletter = () => {
    return (
        <div className="SubscribeNewsletter pt-5" style={{ backgroundColor: '#676DDB' }} >
            <br />
            <div className="container">
                <div className="row text-white justify-content-center align-items-center">

                    <div className="col-12 col-sm-6 d-flex justify-content-end align-items-center ps-5">
                        <h2 className="display-6 fw-bold">
                            Subscribe To Our Newsletter To Get Daily Content!
                        </h2>
                    </div>

                    <div className="col-12 col-sm-6 d-flex flex-column">
                        <form className="form-floating">
                            <input type="email" className="form-control w-50 border-0 border-bottom d-inline" id="floatingInputValue" placeholder="name@example.com" style={{ backgroundColor: '#676DDB' }} />
                            <i className="fas fa-paper-plane text-warning btn"></i>
                            <label for="floatingInputValue">Enter your email</label>

                            <div className="form-check mt-4">
                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                <label className="form-check-label" for="flexRadioDefault1">
                                    I agree to all terms
                                </label>
                            </div>  
                        </form>
                    </div>

                </div>
            </div>
            <br />
            <br />
            <div className="bg-blue text-white p-4 d-flex flex-column justify-content-center align-items-center">
                <h2 className="display-6 fw-bolder">START LEARNING TODAY!</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
    );
};

export default SubscribeNewsletter;