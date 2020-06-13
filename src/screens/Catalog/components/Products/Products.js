import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import {ProductCard} from "../index";
import IphoneImage from '../../../../images/iphone.png';
import IpodImage from '../../../../images/ipods.png';
import {currencyString} from "../../../../utils/formats";


const data = [{
    header: 'iPhone 11 - 64GB - Purple',
    src: IphoneImage,
    location: 'New York',
    id: 1,
    unit: 439,
    total: 4390,
    qty: 10,
    tags: ['FactorySealed', 'Verizon'],
    freight: [{
        head: 'Freight Type',
        value: 'CIF'
    }, {
        head: 'Est Delivery Time',
        value: '3-5 Days'
    }]
}, {
    header: 'iPhone XR - Space Grey',
    src: IpodImage,
    location: 'New York',
    id: 2,
    unit: 409,
    total: 8180,
    qty: 20,
    tags: ['NewInBox', 'Unlocked'],
    freight: [{
        head: 'Freight Type',
        value: 'CIF'
    }, {
        head: 'Est Delivery Time',
        value: '3-5 Days'
    }]
}, {
    header: 'Apple Airpod 2',
    src: IpodImage,
    location: 'Dubia',
    id: 2,
    unit: 249,
    total: 16840,
    qty: 50,
    tags: ['FactorySealed'],
    freight: [{
        head: 'Freight Type',
        value: 'CIF'
    }, {
        head: 'Est Delivery Time',
        value: '3-5 Days'
    }, {
        head: 'Freight Charges',
        value:  currencyString(1684),
    }]
}]

Products.propTypes = {
    data: PropTypes.array
}

export default function Products() {
    return (
        <div className={'Products'}>
            <div className="Products__header">
                <span className="Products__item-product">Product</span>
                <span className="Products__item-location">Location</span>
                <span className="Products__item-qty">Qty</span>
                <span className="Products__item-avgunitprice">Avg Unit Price</span>
                <span className="Products__item-total">Total</span>
                <span className="Products__item-remove">Remove</span>
            </div>

            {
                data.map(i => <ProductCard key={`${i.id}`}
                                           image={i.src}
                                           location={i.location}
                                           freight={i.freight}
                                           unit={i.unit}
                                           total={i.total}
                                           tags={i.tags}
                                           qty={i.qty}
                                           header={i.header}/>)
            }
        </div>
    )
}
