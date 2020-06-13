import React from 'react';
import './style.css';
import {Selector} from "../../../../components";

const cities = [{
    id: 1,
    name: 'New York'
}, {
    id: 2,
    name: 'Dubia'
}];

const partner = [{
    id: 1,
    name: 'Line'
}, {
    id: 2,
    name: 'Dasher'
}]

export default function FreightSelection() {
    return (
        <div className={'FreightSelection'}>
            <h3>Freight Selection:</h3>

            <div className="FreightSelection__content">
                <Selector label={'Destination City'} data={cities} defaultValue={1} />
                <Selector label={'Selected Partner 3PL'} data={partner} defaultValue={2}></Selector>
            </div>
        </div>
    )
}
