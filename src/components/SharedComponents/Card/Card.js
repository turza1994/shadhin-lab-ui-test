import React from 'react';
import '../../../style.css'

const Card = ({children, title, details, bgColor, textCenter}) => {
    return (
        <div className="Card card mt-5 rounded mx-auto" style={{ width: '18rem', backgroundColor: `${bgColor && bgColor}` }}>
            <div className={`card-body ${textCenter && 'text-center'}`}>
                {children}
                <h5 className="card-title pt-4">{title}</h5>
                <p className="card-text lh-sm pt-3">{details}</p>
            </div>
        </div>
    );
};

export default Card;