import React from 'react';
import { Button, Result } from 'antd';
import './Cart.scss';

const Cart = () => {
    return (
        <div className='globalContainer fav-wrapper'>
            <h1 className='fav-wrapper__title'>В корзине 0 товаров</h1>

            <div>
                <Result
                    status="404"
                    title="Вы еще не добавили ни одного товара в корзину"
                    extra={<Button type="primary">Закажи прямо сейчас</Button>}
                />
            </div>
        </div>
    )
}

export default Cart;