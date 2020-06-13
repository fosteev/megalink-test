import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import {VerticalDelimiter} from '../../../../components';
import {currencyString} from "../../../../utils/formats";


ProductCardBottomInfo.PropTypes = {
    data: PropTypes.array
}

ProductCardBottomInfo.defaultProps = {
    data: []
}

export default function ProductCardBottomInfo({data}) {
    return data.reduce((acc, cur) => {
        acc.push(
            <div className={'ProductCardBottomInfo'}>
                {acc.length !== 0 ? <VerticalDelimiter /> : null}
                <span className="ProductCardBottomInfo__head">{cur.head}: </span>
                <span className="ProductCardBottomInfo__value">{cur.value}</span>
            </div>
        );
        return acc;
    }, [])
}
