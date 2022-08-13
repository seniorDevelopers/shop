import React from 'react';
import "./NewCard.scss";

interface Types {
    img: string,
    title: string,
    price: string,
}

const NewCard = ({img, title, price}: Types) => {
  return (
    <div className='card-wrapper'>
        <img src={img} alt={title} />
        <div className='card-wrapper__titles'>
            <p className='card-wrapper__titles__title'>{title}</p>
            <span className='card-wrapper__titles__text'>{price}</span>
        </div>
    </div>
  )
}

export default NewCard;