import React from 'react';
import './style.css';
import PrintImage from '../../images/Print.svg'

export default function Print() {
    return (
        <div className={'Print'}>
            <img src={PrintImage} alt="print image"/>
            <span>Print</span>
        </div>
    )
}
