import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CourseCard from '../SharedComponents/CourseCard/CourseCard';
import '../../style.css'

function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
      <button
        className={className}
        style={{ background: "#eee", fontSize: '30px', width: '50px', height: "50px", color: '#aaa', borderRadius: '50%', textAlign: 'center' }}
        onClick={onClick}
      >
          <i className="fas fa-chevron-right"></i>
      </button>    
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
      <div
        className={className}
        style={{ background: "#eee", fontSize: '30px', width: '50px', height: "50px", color: '#aaa', borderRadius: '50%', textAlign: 'center' }}
        onClick={onClick}
      >
          <i className="fas fa-chevron-left"></i>
      </div>
    );
  }

const LiveCourses = () => {

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
        <div className="LiveCourses pt-5 mt-5 bg-light" 
            style={{ 
                position: 'relative'
            }} 
        >

            <div className="banner container">
                <div className="row align-items-center" style={{  }}>
                    <div className="col-12 col-sm-5 lh-lg" style={{ paddingLeft: '2vw' }}>
                        <h2 className="text-blue fw-normal display-6 pt-5">
                            <span className="fw-bolder">Live Online</span> Courses <br/>
                        </h2>
                        <p className=" lh-sm pt-3 lead">Attend live online sessions like you are in a classroom, watch live videos, ask questions, join real-time discussions</p>
                    </div>
                    <div className="col-12 col-sm-7 d-flex justify-content-end align-items-end">
                        <img className="img-fluid" src="Group 30604.png" alt="" style={{ position: 'absolute', top: '-90px', right: '0', width: '30%' }} />
                        <img className="img-fluid" src="course.png" alt="" style={{ position: 'absolute', top: '-90px', right: '140px', width: '40%' }} />
                    </div>
                </div>
            </div>

            <div className="container" style={{ position: 'relative', bottom: '-145px', marginBottom: '130px' }} >
                <Slider className="mx-auto ps-4" {...settings}>
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                    <CourseCard />
                </Slider>
                <div className="d-flex justify-content-center align-items-center mt-5">
                  <button className="btn btn-light mx-auto fw-bold lead p-2 px-5 shadow" style={{ zIndex:'2' }}>VIEW ALL COURSES</button>
                </div>
            </div>

        </div>
    );
};

export default LiveCourses;