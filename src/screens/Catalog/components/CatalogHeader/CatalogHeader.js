import React from 'react';
import './style.css';
import {Print, Share} from "../../../../components";

export default function CatalogHeader() {
    return (
        <div className={'CatalogHeader'}>

            <div className={'CatalogHeader__header'}>
                <h1>
                    Your Cart
                </h1>

                <span className={'CatalogHeader__content'}>
                    Product is only available for pickup in select locations.
                    Chose from the available locations listed below and Conextion will aggregate your order at one of our Partner 3PLs.
                    Product will be validated and inspected and made available for pickup by you or your freight forwarder once full payment is received.
                </span>
            </div>

            <div className={'CatalogHeader__export'}>
                <div className={'CatalogHeader_btns'}>
                    <Share />
                    <Print />
                </div>
            </div>
        </div>
    )
}
