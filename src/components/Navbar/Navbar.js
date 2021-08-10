import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Navbar = () => {

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 10,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 7,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 750,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                initialSlide: 4
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            }
        ]
    };

    return (
        <div className="container-fluid bg-secondary">
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                        <Slider className="fw-bold" {...settings}>
                                    
                                    <a className="nav-link text-white" href="/">Home</a>
                                    <a className="nav-link text-white" href="/">Features</a>
                                    <a className="nav-link text-white" href="/">Pricing</a>
                                    <a className="nav-link text-white" href="/">Accounting</a>
                                    <a className="nav-link text-white" href="/">Home</a>
                                    <a className="nav-link text-white" href="/">Features</a>
                                    <a className="nav-link text-white" href="/">Pricing</a>
                                    <a className="nav-link text-white" href="/">Accounting</a>
                                    <a className="nav-link text-white" href="/">Home</a>
                                    <a className="nav-link text-white" href="/">Features</a>
                                    <a className="nav-link text-white" href="/">Pricing</a>
                                    <a className="nav-link text-white" href="/">Accounting</a>
                                    <a className="nav-link text-white" href="/">Home</a>
                                    <a className="nav-link text-white" href="/">Features</a>
                                    
                        </Slider>
                    </div>
                </div>            
            </div>
        </div>
    );
};

export default Navbar;