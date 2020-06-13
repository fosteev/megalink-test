import React from 'react';
import './style.css';
import ShareImage from '../../images/share.svg';

export default function Share() {
    return (
        <div className={'Share'}>
            <img src={ShareImage} alt="share image"/>
            <span>Share</span>
        </div>
    )
}
