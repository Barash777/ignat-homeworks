import React from 'react';
import s from './HW13.module.css';
import Request from './common/Request/Request';

function HW13() {
    
    return (
        <div>
            <hr/>
            <span>
                homeworks 13
            </span>

            <div className={s.main}>
                <Request/>
            </div>

            <hr/>
        </div>
    );
}

export default HW13;
