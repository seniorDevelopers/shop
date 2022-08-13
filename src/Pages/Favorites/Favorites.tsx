import React from 'react';
import { Button, Result } from 'antd';

const Favorites = () => {
    return (
        <div className='globalContainer fav-wrapper'>
            <h1 className='fav-wrapper__title'>Ваши любимые товары</h1>

            <div>
                <Result
                    status="404"
                    title="По фильтру товаров не найдено"
                    subTitle="продукт не найден"
                    extra={<Button type="primary">Домой</Button>}
                />
            </div>
        </div>
    )
}

export default Favorites;