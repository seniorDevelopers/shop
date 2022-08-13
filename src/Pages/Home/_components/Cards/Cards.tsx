import React from 'react';
import "./Cards.scss";

interface Types {
    title: string,
    img: string,
}

const Cards = ({title, img}: Types) => {
  return (
    <div className='c-wrapper'>
        <p className='c-wrapper__title'>{title}</p>
        <img src={img} alt={title} />
    </div>
  )
}

export default Cards;