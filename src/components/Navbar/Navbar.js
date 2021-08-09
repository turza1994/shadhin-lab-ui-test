import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-comp">
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav mx-auto">
                            <i className="fas fa-angle-left my-auto bg-white p-1 rounded-circle text-secondary"></i>
                            <a className="nav-link text-white" href="#">Home</a>
                            <a className="nav-link text-white" href="#">Features</a>
                            <a className="nav-link text-white" href="#">Pricing</a>
                            <a className="nav-link text-white" href="#">Accounting</a>
                            <a className="nav-link text-white" href="#">Home</a>
                            <a className="nav-link text-white" href="#">Features</a>
                            <a className="nav-link text-white" href="#">Pricing</a>
                            <a className="nav-link text-white" href="#">Accounting</a>
                            <a className="nav-link text-white" href="#">Home</a>
                            <a className="nav-link text-white" href="#">Features</a>
                            <a className="nav-link text-white" href="#">Pricing</a>
                            <a className="nav-link text-white" href="#">Accounting</a>
                            <a className="nav-link text-white" href="#">Home</a>
                            <a className="nav-link text-white" href="#">Features</a>
                            <i className="fas fa-angle-right my-auto bg-white p-1 rounded-circle text-secondary"></i>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;