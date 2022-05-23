import React from 'react';
import PropTypes from 'prop-types';
import Phone from '../phone/phone';

Fix.propTypes = {
    
};

function Fix(props) {
    let {allItemTelephone}= props
    return (
        <div>
            <Phone
                allItemTelephone={allItemTelephone}
                name={'Linh kiện sửa chữa'}
                fix={''}
                type={'sc'}
            />
        </div>
    );
}

export default Fix;