import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import RemoveImage from '../../../../images/Union.svg';
import {ProductCardBottomInfo} from "../index";
import {currencyString} from "../../../../utils/formats";
import {Quanty, Tag} from "../../../../components";

ProductCard.PropTypes = {
    id: PropTypes.string,
    image: PropTypes.string,
    header: PropTypes.string,
    tags: PropTypes.array,
    location: PropTypes.string,
    freight: PropTypes.array,
    unit: PropTypes.number,
    total: PropTypes.number,
    qty: PropTypes.number
}

ProductCard.defaultProps = {
    tags: [],
    freight: []
}

export default function ProductCard(
    {
        id,
        image,
        header,
        tags,
        location,
        freight,
        unit,
        total,
        qty
    }
) {
    return (
        <div className={'ProductCard'}>
            <div className="ProductCard__content">
                <div className="ProductCard__product">
                    <div className={'ProductCard__photo'}>
                        <img src={image} alt="product image"/>
                    </div>

                    <div className={"ProductCard__descr"}>
                        <span className={'ProductCard__header'}>{header}</span>
                        <span className={'ProductCard__tags'}>
                            {tags.map(i => <Tag key={i} type={i} /> )}
                        </span>
                    </div>
                </div>
                <div className="ProductCard__location">{location}</div>
                <div className="ProductCard__qty">
                    <Quanty defaultValue={qty} />
                </div>
                <div className="ProductCard__avgunitprice">${unit}/unit</div>
                <span className="ProductCard__total">{currencyString(total)}</span>
                <div className="ProductCard__remove">
                    <img src={RemoveImage} alt="remove image"/>
                </div>

            </div>
            <div className="ProductCard__footer">
                <ProductCardBottomInfo data={freight}/>
            </div>
        </div>
    )
}
