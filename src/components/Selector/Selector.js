import React, {useState} from 'react';
import './style.css';
import PropTypes from 'prop-types';

Selector.propTypes = {
    label: PropTypes.string,
    data: PropTypes.array,
    defaultValue: PropTypes.number
}

Selector.defaultProps = {
    label: '',
    data: [],
    defaultValue: 0
}


export default function Selector({label, data, defaultValue}) {
    const [value, setValue] = useState(defaultValue);

    const handleChange = event => {
        setValue(event.target.value)
    }

    return (
        <div className={'Selector'}>
            <span>{label}: </span>

            <select value={value} onChange={handleChange}>
                {
                    data.map(({id, name}) => <option value={`${id}`} key={`${id}`}>{name}</option>)
                }
            </select>
        </div>
    )
}
