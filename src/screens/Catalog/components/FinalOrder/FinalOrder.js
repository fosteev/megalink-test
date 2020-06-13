import React from 'react';
import './style.css';
import {currencyString} from "../../../../utils/formats";
import {Divider} from '../../../../components';

export default function FinalOrder() {
    return (
        <div className={'FinalOrder'}>
            <div className="FinalOrder__header">
                <div className="FinalOrder__item">
                    <span>Subtotal:</span>
                    <span>{currencyString(29410)}</span>
                </div>
                <div className="FinalOrder__item">
                    <span>Deposit:</span>
                    <span>{currencyString(1684)}</span>
                </div>
            </div>

            <Divider />

            <div className="FinalOrder__content">
                <div className="FinalOrder__total">
                    <div className={'FinalOrder__totalheader'}>
                        <span>Total*:</span>
                        <span className="FinalOrder__totalsubheader">
                            *Due after inspection
                        </span>
                    </div>
                    <span>{currencyString(27726)}</span>
                </div>
            </div>

            <div className="FinalOrder__bottom">
                <div className={'FinalOrder__item'}>
                    <span>Due at Checkout:</span>
                    <span>{currencyString(1685)}</span>
                </div>
                <div className={'FinalOrder__item FinalOrder_opacity'}>
                    <span>Due after inspection:</span>
                    <span>{currencyString(27726)}</span>
                </div>
            </div>

            <button className={'FinalOrder__button'}>
                Finalize Your Order
            </button>

        </div>
    )
}
