import React from 'react';
import PropTypes from 'prop-types';

Toast.propTypes = {

};

function Toast(props) {
    return (
        <div className={`row ${props.none}`}>
            <div className='col-lg d-flex justify-content-center toasts'>
                <div>
                    {props.prop}
                </div>
            </div>
        </div>
    );
}

export default Toast;