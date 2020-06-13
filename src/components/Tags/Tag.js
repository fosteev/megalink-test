import React from 'react';
import {FactorySealed, NewInBox, Unlocked, Verizon} from "./index";
import PropTypes from 'prop-types';

Tag.propTypes = {
    type: PropTypes.oneOf(['FactorySealed', 'NewInBox', 'Unlocked', 'Verizon'])
}

export default function Tag({type}) {
    if (type === 'FactorySealed') {
        return <FactorySealed />;
    }

    if (type === 'NewInBox') {
        return <NewInBox />;
    }

    if (type === 'Unlocked') {
        return <Unlocked />;
    }

    if (type === 'Verizon') {
        return <Verizon />;
    }
}
