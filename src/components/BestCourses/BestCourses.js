import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../../style.css'
import CourseCard from '../SharedComponents/CourseCard/CourseCard';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button
        className={className}
        style={{ background: "#eee", fontSize: '30px', width: '50px', height: "50px", color: '#aaa', borderRadius: '50%', textAlign: 'center' }}
        onClick={onClick}
      >
          <i class="fas fa-chevron-right"></i>
      </button>    
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ background: "#eee", fontSize: '30px', width: '50px', height: "50px", color: '#aaa', borderRadius: '50%', textAlign: 'center' }}
        onClick={onClick}
      >
          <i class="fas fa-chevron-left"></i>
      </div>
    );
  }
  

const BestCourses = () => {

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ],
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        
    };

    return (
        <div className="BestCourses py-4 my-4 text-secondary container">
            <h2 className="text-center display-6 fw-bold">Best <span className="text-blue">Selling Courses</span></h2>
            <p className="text-center text-lightGrey lead">Explore our most popular, high-demand courses - a fast track to your independence</p>
            <div className="container">
                <div className="row justify-content-center align-items-center">
                    <div className="col-12">
                        <Slider className="mt-4 pt-4 mx-auto ps-4" {...settings}>
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />
                            <CourseCard />
                        </Slider>
                    </div>
                </div>
            </div>
            <div className="d-flex justify-content-center align-items-center mt-5">
                <button className="btn btn-light mx-auto fw-bold lead p-2 px-5">VIEW ALL COURSES</button>
            </div>
      </div>
    );
};

export default BestCourses;