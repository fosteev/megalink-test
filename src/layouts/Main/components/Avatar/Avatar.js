import React from 'react';
import './style.css';
import AvatarImage from '../../../../images/avatar.png'

export default function Avatar() {
    return (
        <div className={'Avatar'} >
            <div className="Avatar__logo" style={{
                backgroundImage: `url(${AvatarImage})`
            }} />
        </div>
    )
}
