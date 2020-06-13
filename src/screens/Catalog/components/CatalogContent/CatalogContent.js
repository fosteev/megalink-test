import React from 'react';
import './style.css';
import {FreightSelection, Products, Summary} from "../index";


export default function CatalogContent() {
    return (
        <div className={'CatalogContent'}>
            <div className="CatalogContent__products">
                <FreightSelection />

                <h3>Your Products</h3>

                <Products />
            </div>

            <div className="CatalogContent__priceinfo">
                <Summary />
            </div>

        </div>
    )
}
