import React from 'react'
import remove from "../../../assets/Images/delete.png"
import "./deletestyle.scss"

interface Type {
    photo: any;
    Product: string;
    available: string;
    
    price: any;
}
function Delete({photo, Product, available,  price }: Type) {
  return (
    <>
        <div className='deleteCard'>
            <div className='photo'>
                <img src={photo} alt="product" />
            </div>
            <div className='productName'>
                <h5>{Product}</h5>
                <p>{available}</p>
            </div>
            <div className='addRemove'>
                <div className='num '>-</div>
                <div className='num numb'>0</div>
                <div className='num '>+</div>
            </div>
            <div className='price'>
                <h5>{price}</h5>
            </div>
            <div className='remove'><img src={remove} alt="Delete" /></div>
        </div>
    </>
  )
}

export default Delete