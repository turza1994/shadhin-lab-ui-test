import React from 'react';
import Navbar from '../Navbar/Navbar';
import './Header.css';
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

            <div className="container-fluid">
                <div className="row align-items-center" style={{ height: '80vh' }}>
                    <div className="col-12 col-sm-6 lh-lg" style={{ paddingLeft: '5vw' }}>
                        <h1 className="text-blue fw-normal display-5">
                            Where <span className="fw-bolder">Dreamers</span> Become <br/>
                            <span className="fw-bolder">Doers</span> and <span className="fw-bolder">Earners</span>
                        </h1>
                        <p className="fs-5">Learn a Skill; the World is Yours</p>
                        <button className="btn btn-light text-blue px-5 py-3 fw-bold">START LEARNING</button>
                        <p className="ps-3 pt-4 fw-bold">BECOME A INSTRUCTOR</p>
                    </div>
                    <div className="col-12 col-sm-6 d-flex justify-content-end align-items-end">
                        <img className="w-50 header-img" src="header-img.png" alt="" style={{ position: 'absolute', bottom: '0', right: '0' }} />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Header;