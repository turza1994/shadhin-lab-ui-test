import React from 'react';

const UpcomingCourseCard = () => {
    return (
        <div className="Card card text-secondary mt-4 pt-4 mx-auto" style={{ width: '16rem' }} >
            <img src="course.png" className="card-img-top img-fluid w-75 mx-auto" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p className="card-text d-flex"><span>Lorem</span> <span>Lorem</span> <span>Lorem</span></p>
            </div>
        </div>
    );
};

export default UpcomingCourseCard;