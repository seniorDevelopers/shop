import React, { useState } from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';
import BuyCard from 'components/Cards/BuyCard/BuyCard';
import './Favorites.scss';

const Favorites = () => {

    const trueFunc = () => {
        console.log('1');
    }

    return (
        <div className='globalContainer fav-wrapper'>
            <h1 className='fav-wrapper__title'>Ваши любимые товары</h1>
            {/* <div>
                <Result
                    status="404"
                    title="По фильтру товаров не найдено"
                    subTitle="продукт не найден"        
                    extra={
                        <Link to={'/'}>
                            <Button type="primary">Домой</Button>
                        </Link>
                    }
                />
            </div> */}

            {/* 👆 DEFAULT XOLATI */}

            <div className='favorite-products'>
                <BuyCard
                    img='https://cdn.goodzone.uz/goodzone/3eb1d9c5-910c-477b-81f5-d446b26bdeab-copy'
                    title='Telefon'
                    price='10 000 000'
                    trueFunc={trueFunc}
                    addFavorite={trueFunc}
                    id='0'
                />
            </div>
        </div>
    )
}

export default Favorites;