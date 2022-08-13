import React from 'react';
import { HeartOutlined } from "@ant-design/icons";
import './BuyCard.scss';

interface Types {
    img: string,
    title: string,
    price: string,
}

const BuyCard = ({img, title, price}: Types) => {
    return (
      <div className='buy-card-wrapper'>
          <img style={{maxWidth: "100%"}} src={img} alt={title} />
          <div className='buy-card-wrapper__titles'>
              <p className='buy-card-wrapper__titles__title'>{title}</p>
              <b className='buy-card-wrapper__titles__text'>{price}</b>
          </div>
          <div className='buy-card-wrapper__icons'>
            <button className='buy-card-wrapper__icons__btn'>Sotib olish</button>
            <HeartOutlined style={{fontSize: "20px"}} />
          </div>
      </div>
    )
  }

export default BuyCard;