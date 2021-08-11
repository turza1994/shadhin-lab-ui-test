import React, { useRef } from 'react';
import Slider from "react-slick";
import StoryCard from '../SharedComponents/StoryCard/StoryCard';

const SuccessStories = () => {

    const slider = useRef();
  
    const next = () => {
    slider.current.slickNext();
    };
    const previous = () => {
    slider.current.slickPrev();
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        arrows: false,
      
      responsive: [
       {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
     ],
    };

    return (
        <div className="SuccessStories" style={{ height: '85vh', padding: '0', margin: '0', position: 'relative' }} >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-6 d-flex justify-content-center text-blue">
                        <h2 className="display-5 pt-5">
                            Get <span className="fw-bolder">Inspired</span> by <br />
                            <span className="fw-bolder">Our Success Stories</span>
                        </h2>
                    </div>

                    <div className="col-12 col-sm-6 m-0 p-0">
                        <img src="success.jpg" className="img-fluid" alt="" 
                            style={{ width: '100%', height: '85vh', objectFit: 'cover' }} />
                    </div>
                </div>
            </div>

            <div className="container w-75" style={{ position: 'absolute', bottom: '10vh', left: '15vw' }} >
                <div className="row">
                    <div className="col-12 col-sm-8 w-50 bg-blue text-white lead rounded p-4">
                        <Slider ref={(c) => (slider.current = c)} {...settings}>
                            <StoryCard />
                            <StoryCard />
                            <StoryCard />
                        </Slider>
                        <div style={{ position: 'absolute', bottom: '2vh', right: '1vw' }}>
                            <button className="btn btn-light rounded-circle me-2" onClick={previous}> <i className="fas fa-chevron-left"></i> </button>
                            <button className="btn btn-light rounded-circle" onClick={next}> <i className="fas fa-chevron-right"></i> </button>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

export default SuccessStories;