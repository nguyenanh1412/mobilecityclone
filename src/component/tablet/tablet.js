import React from 'react';
import Phone from '../phone/phone';
import PropTypes from 'prop-types';

Tablet.propTypes = {

};

function Tablet(props) {
    let {allItemTelephone}= props
    return (
        <div>
            <Phone
                allItemTelephone={allItemTelephone}
                name={'Máy tính bảng'}
                type={'tablet'}
            />
        </div>
    );
}

export default Tablet;