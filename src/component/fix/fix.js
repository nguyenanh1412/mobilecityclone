import React from 'react';
import Phone from '../phone/phone';



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