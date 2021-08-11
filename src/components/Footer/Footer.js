import React from 'react';

const Footer = () => {
    return (
        <div className="Footer bg-light pt-5">
            <div className="container">
                <div className="row justify-content-around">
                    <div className="col-4 col-sm-2">
                        <ul className="list-unstyled text-secondary">
                            <li className="fw-bolder text-dark">About Us</li>
                            <li>Team</li>
                            <li>About Us</li>
                            <li className="fw-bolder text-dark">Career</li>
                            <li>Press Center</li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-2">
                        <ul className="list-unstyled text-secondary">
                            <li className="fw-bolder text-dark">Become an Instructor</li>
                            <li>Instructor Login</li>
                            <li>FAQ</li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-2">
                        <ul className="list-unstyled text-secondary">
                            <li className="fw-bolder text-dark">Support</li>
                            <li>Contact Us</li>
                            <li>Support</li>
                            <li>Feedback</li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-2">
                        <ul className="list-unstyled text-secondary">
                            <li className="fw-bolder text-dark">Site Map</li>
                            <li>Privacy Policy</li>
                            <li>Cookie Policy</li>
                            <li>Media Policy</li>
                        </ul>
                    </div>
                    <div className="col-4 col-sm-3">
                        <ul className="list-unstyled text-secondary">
                            <li className="fw-bolder text-dark">Socials</li>
                            <li className="">
                                <i className="fab fa-facebook text-dark me-2"></i>
                                <i className="fab fa-linkedin text-primary me-2"></i>
                                <i className="fab fa-twitter text-primary"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="py-2 d-flex justify-content-between lead fs-6" style={{ backgroundColor: '#ddd' }}>
                <span className="ps-5">2021 Coder Trust</span>
                <span className="pe-5">All Right Reserved</span>
            </div>
        </div>
    );
};

export default Footer;