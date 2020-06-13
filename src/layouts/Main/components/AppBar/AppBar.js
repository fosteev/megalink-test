import React from 'react';
import './style.css';
import Logo from '../../../../images/logo.svg';
import {SearchInput, Avatar, Store} from "../index";

const menuItems = [
    'Home',
    'Categories',
    'Brands',
    'Features'
]

export default function AppBar() {
    return (
        <header className={'AppBar'}>
            <div className="AppBar__content">

                <div className={'AppBar__left'}>
                    <img src={Logo} className={'AppBar__logo'}/>

                    <div className={"AppBar__menu"}>
                        {
                            menuItems.map(i => <div key={i}
                                                    className="AppBar__item">{i}</div>)
                        }
                    </div>
                </div>

                <div className="AppBar__right">

                    <SearchInput />

                    <Avatar />

                    <Store />

                </div>

            </div>

        </header>
    )
}
