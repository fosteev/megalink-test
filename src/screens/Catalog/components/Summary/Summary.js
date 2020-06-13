import React from 'react';
import './style.css';
import {FreightInformation} from '../index';
import {FinalOrder} from "../index";

export default function Summary() {
    return (
        <div className={'Summary'}>
            <FreightInformation />
            <FinalOrder />
        </div>
    )
}
