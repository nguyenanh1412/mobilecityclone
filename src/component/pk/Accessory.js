import React from 'react';
import Phone from '../phone/phone';
import PropTypes from 'prop-types';

Accessory.propTypes = {
    
};

function Accessory(props) {
    let {allItemTelephone}= props
    return (
        <div>
            <Phone
                allItemTelephone={allItemTelephone}
                name={'Phụ kiện điện thoại'}
                pk={''}
                type={'pk'}
            />
        </div>
    );
}
export default Accessory;