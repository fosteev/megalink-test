import React from 'react';
import './style.css';
import {currencyString} from "../../../../utils/formats";

const content = [{
    header: 'Ready for pickup at Dachser in New York',
    items: [{
        type: 'FOB',
        text: '10 iPhone 11 - 64GB - Purple'
    }, {
        type: 'FOB',
        text: '20 iPhone XR - Space Grey '
    }]
}, {
    header: 'Shipping from Union in Dubai',
    items: [{
        type: 'CIF',
        text: '50 Apple Airpod 2'
    }]
}]

export default function FreightInformation() {
    return (
        <div className={'FreightInformation'}>
            <span className="FreightInformation__header">
                Freight Information
            </span>

            <div className={'FreightInformation__content'}>
                {
                    content.map(({header, items}) => (
                        <div className="FreightInformation__item" key={header}>
                            <span className="FreightInformation__subheader">{header}</span>

                            {
                                items.map(({type, text}) => (
                                    <div className={'FreightInformation__type'}>
                                        <span className="FreightInformation__typename">{type}</span>
                                        <span className="FreightInformation__typetext">{text}</span>
                                    </div>
                                ))
                            }
                        </div>
                    ))
                }

            </div>

            <div className="FreightInformation__total">
                <span className="FreightInformation__totalheader">Est Freight Charges: </span>
                <span className="FreightInformation__totalsum">{currencyString(1684)}</span>
            </div>

        </div>
    )
}
