import React from 'react';
import UpcomingCourseCard from '../SharedComponents/UpcomingCourseCard/UpcomingCourseCard';

const UpcomingCourses = () => {
    return (
        <div className="UpcomingCourses lh-sm py-5 my-5">
            <p className="lead text-secondary text-center">Upcoming Courses</p>
            <h2 className="text-secondary fw-normal display-6 text-center fw-bold mb-5">
                Upcoming <span className="text-blue">New Global Revenue</span> Courses
            </h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <UpcomingCourseCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <UpcomingCourseCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <UpcomingCourseCard />
                    </div>
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                        <UpcomingCourseCard />
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center align-items-center mt-5">
                <button className="btn btn-light mx-auto fw-bold lead p-2 px-5 shadow">VIEW ALL COURSES</button>
            </div>
        </div>
    );
};

export default UpcomingCourses;