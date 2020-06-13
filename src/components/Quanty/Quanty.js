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
    const [value, setValue] = useState(defaultValue);

    const handleChange = event => {
        if (event.target.value <= maxSize) {
            setValue(event.target.value);
        }
    }

    const handleArrowUp = () =>  {
        const newValue = value + 1;
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
                   value={value}
                   maxlength={2} />
            <div className={'Quanty__arrows'}>
                <img src={InputIconUp} onClick={handleArrowUp} alt="icon up"/>
                <img src={InputIconDown} onClick={handleArrowDown} alt="icon down"/>
            </div>
        </div>
    )
}
