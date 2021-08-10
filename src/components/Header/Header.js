import React from 'react';
import Navbar from '../Navbar/Navbar';
import '../../style.css'

const Header = () => {
    return (
        <div className="Header" 
            style={{ 
                position: 'relative', minHeight: '100vh',
                backgroundColor: 'rgb(255, 200, 0)' 
            }} 
        >

            <Navbar />

            <div className="container">
                <div className="row align-items-center" style={{ height: '90vh' }}>
                    <div className="col-12 col-sm-6 lh-lg" style={{ paddingLeft: '0vw' }}>
                        <h1 className="text-blue fw-normal display-5">
                            Where <span className="fw-bolder">Dreamers</span> Become <br/>
                            <span className="fw-bolder">Doers</span> and <span className="fw-bolder">Earners</span>
                        </h1>
                        <p className="fw-bold lead">Learn a Skill; the World is Yours</p>
                        <button className="btn btn-light text-blue px-5 py-3 my-2 fw-bold lead">START LEARNING</button>
                        <p className="ps-1 pt-3 fw-bold lead">BECOME A INSTRUCTOR</p>
                    </div>
                    <div className="col-12 col-sm-6 d-flex justify-content-end align-items-end">
                        <img className="w-50 img-fluid header-img" src="header-img.png" alt="" style={{ position: 'absolute', bottom: '0', right: '0', width: 'auto', height: 'auto' }} />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;