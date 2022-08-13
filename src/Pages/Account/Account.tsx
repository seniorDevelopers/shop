import React from 'react';
import './Account.scss';

const Account = () => {
    return (
        <div className='globalContainer account-wrapper'>
            <h1>Привет, Kimdir</h1>

            <div className='settings'>
                <div className='setting-top'>
                    <h1 className='setting-top__title'>Настройки профиля</h1>
                    <div className='setting-top__btns'>
                        <button className='setting-top__btns__btn-blue'>Редактировать</button>
                        <button className='setting-top__btns__btn'>Выход</button>
                    </div>
                </div>
                    <hr style={{opacity: "0.7", marginBottom: "3rem", marginTop: "1rem"}}/>
                <div className='setting-body'>
                    <img style={{ borderRadius: "50%" }} src="https://picsum.photos/50/50" alt="img" />
                    <div className='setting-body__titles-group'>
                        <div className='setting-body__titles-group__titles'>
                            <h2 className='setting-body__titles-group__titles'>Имя</h2>
                            <p className='setting-body__titles-group__text'>KImdir</p>
                        </div>
                        <div className='setting-body__titles-group__titles'>
                            <h2 className='setting-body__titles-group__titles'>Фамилия</h2>
                            <p className='setting-body__titles-group__text'>Kimdir</p>
                        </div>
                        <div className='setting-body__titles-group__titles'>
                            <h2 className='setting-body__titles-group__titles'>Номер телефона</h2>
                            <p className='setting-body__titles-group__text'>Nechidir</p>
                        </div>
                        <div className='setting-body__titles-group__titles'>
                            <h2 className='setting-body__titles-group__titles'>Адрес доставки</h2>
                            <p className='setting-body__titles-group__text'>----</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;