import React from 'react';
import '../../../style.css'

const CourseCard = () => {
    return (
        <div className="Card card" style={{ width: '16rem' }} >
            <img src="course.png" className="card-img-top img-fluid w-75 mx-auto" alt="..." />
            <div className="card-body lh-lg">
                <h5 className="card-title">Card title</h5>
                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <label className="ps-3">(13425)</label>
                <p className="card-text d-flex justify-content-between"><span>Lorem</span> <span>Lorem</span> <span>Lorem</span></p>
                <p><span className="text-dark lead fw-bold">$11.99</span> <span className="ps-3 lead fw-bold">$11.99</span></p>
                <button className="course-cart-btn btn btn-light lead px-4">Add to Cart</button>
                <button className="course-love-btn btn btn-light px-4 ms-1"><i className="far fa-heart"></i></button>
            </div>
        </div>
    );
};

export default CourseCard;