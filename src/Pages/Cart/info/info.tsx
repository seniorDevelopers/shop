import React from 'react'
import "./infostyle.scss"

function Info({allPrice}:any) {
  const all = allPrice.reduce((a: number, b: number) => a + b) + 10000
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
                <div className='font'>{allPrice.reduce((a: number, b: number) => a + b).toLocaleString()} so'm</div>
                <div className='font'>0 uzs</div>
                <div className='font'>10 000 uzs</div>
                <div className='font total'>{all.toLocaleString()} so'm</div>
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