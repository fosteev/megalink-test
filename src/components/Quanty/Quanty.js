import React, {useState} from 'react';
import './style.css';
import InputIconUp from '../../images/inputIconUp.svg';
import InputIconDown from '../../images/inputIconDown.svg';
import PropTypes from 'prop-types';

Quanty.propTypes = {
    defaultValue: PropTypes.number
}

Quanty.defaultPropTypes = {
    defaultValue: 0
}

const maxSize = 99;

export default function Quanty({defaultValue}) {
    const [value, setValue] = useState(Number(defaultValue));

    const handleChange = event => {
        if (event.target.value <= maxSize) {
            setValue(Number(event.target.value));
        }
    }

    const handleArrowUp = () =>  {
        const newValue = (Number(value) || 0) + 1;
        if (newValue <= maxSize) {
            setValue(newValue);
        }
    }
    const handleArrowDown = () => {
        if (value >= 1) {
            setValue(value - 1)
        }
    };

    return  (
        <div className={'Quanty'}>
            <input type="number"
                   max="99"
                   onChange={handleChange}
                   value={value} />
            <div className={'Quanty__arrows'}>
                <img src={InputIconUp} onClick={handleArrowUp} alt="icon up"/>
                <img src={InputIconDown} onClick={handleArrowDown} alt="icon down"/>
            </div>
        </div>
    )
}
