import React from 'react';
import "./Card.scss";

interface Types {
    img: string,
    title: string,
    price: string,
}

const Card = ({img, title, price}: Types) => {
  return (
    <div className='card-wrapper'>
        <img style={{maxWidth: "100%"}} src={img} alt={title} />
        <div className='card-wrapper__titles'>
            <p className='card-wrapper__titles__title'>{title}</p>
            <span className='card-wrapper__titles__text'>{price}</span>
        </div>
    </div>
  )
}

export default Card;