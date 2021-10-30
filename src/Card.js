import React from 'react';
import './Card.css';

const Card = ({ data, cardIndex }) => {
    return (
        <div>
        {data[cardIndex].map((item, i) => {
            return(
                <div className="card" key={i}>
                    <p >{item.title}</p>
                    <img src={`${item.thumbnailUrl}`} alt="lion" />
                </div>
            )
        })}
        </div>
        
    );
};

export default Card;