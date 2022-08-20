import React from 'react'
import "./infostyle.scss"

function Info() {
  return (
    <>
    <div className='orderCard'>

    <div className='order'>
        <div className='key'>
        <div>
                <div className='font'>Products <span>(1)</span></div>
                <div className='font'>Discount</div>
                <div className='font'>Delivery</div>
                <div className='font total'>Total price</div>
            </div>
        </div>
        <div>
            <div className='value'>
                <div className='font'>180 000 000 uzs</div>
                <div className='font'>0 uzs</div>
                <div className='font'>10 000 uzs</div>
                <div className='font total'>190 000 000 uzs</div>
            </div>
        </div>
    </div>
    <div className='Buttons'>
    <button>Pay</button>
    <button>Menu</button>
    </div>
    </div>
    </>
  )
}

export default Info