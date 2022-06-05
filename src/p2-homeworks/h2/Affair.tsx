import React from 'react'
import {AffairType} from './HW2';
import css from './Affair.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        // alert('WOW. this is ' + _id)
        props.deleteAffairCallback(_id);
    }// need to fix

    let priorStyle;
    priorStyle = props.affair.priority === 'high' ? {color: 'red'} :
        props.affair.priority === 'middle' ? {color: 'blue'} : {color: 'orange'}

    return (
        <div className={css.affair}>
            <p className={css.p1}>{props.affair.name}</p>
            <p className={css.p2} style={priorStyle}>{props.affair.priority}</p>
            <p>
                <button className={css.btn} onClick={() => deleteCallback(props.affair._id)}>X</button>
            </p>

        </div>
    )
}

export default Affair
