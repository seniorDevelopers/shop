import React from 'react';
import "./ProductCard.scss";

interface Types {
    title: string,
    img: string,
}

const ProductCard = ({title, img}: Types) => {
  return (
    <div className='c-wrapper'>
        <p className='c-wrapper__title'>{title}</p>
        <img src={img} alt={title} />
    </div>
  )
}

export default ProductCard;