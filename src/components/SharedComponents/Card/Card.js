import React from 'react';
import '../../../style.css'

const Card = ({children, title, details}) => {
    console.log(children);
    return (
        <div className="Card card mt-5 rounded mx-auto" style={{ width: '18rem' }}>
            <div className="card-body">
                {children}
                <h5 className="card-title pt-4">{title}</h5>
                <p className="card-text lh-sm pt-3">{details}</p>
            </div>
        </div>
    );
};

export default Card;