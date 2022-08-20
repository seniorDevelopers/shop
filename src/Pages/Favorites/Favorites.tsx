import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Favorites = () => {
    return (
        <div className='globalContainer fav-wrapper'>
            <h1 className='fav-wrapper__title'>Ваши любимые товары</h1>

            <div>
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
            </div>
        </div>
    )
}

export default Favorites;