import React from 'react';
import './style.css';
import Magnifier from '../../../../images/magnifier.svg';

export default function SearchInput() {
    return (
        <div className={'SearchField'}>
            <img src={Magnifier} alt="magnifier"/>

            <input type="text" placeholder={'Search our inventory'}/>
        </div>
    )
}
