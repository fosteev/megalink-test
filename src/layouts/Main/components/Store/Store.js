import React from 'react';
import './style.css';
import Cart from '../../../../images/Cart.svg';

export default function Store() {
    return (
       <div className={'Store'} badge={1}>
           <img src={Cart} alt="cart" />
       </div>
    )
}
