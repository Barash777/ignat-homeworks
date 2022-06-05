import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import css from './Affairs.module.css'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            /*deleteAffairCallback={() => {
                props.deleteAffairCallback(a._id);
            }*/
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {
        props.setFilter('all')
    } // need to fix
    const setHigh = () => {
        props.setFilter('high')
    }
    const setMiddle = () => {
        props.setFilter('middle')
    }
    const setLow = () => {
        props.setFilter('low')
    }

    let s1 = {width: '33%'}

    return (
        <div className={css.affairs}>

            {mappedAffairs}

            <button className={css.btn + ' ' + css.btnAll} onClick={setAll}>All</button>
            <button className={css.btn + ' ' + css.btnHigh} onClick={setHigh}>High</button>
            <button className={css.btn + ' ' + css.btnMiddle} onClick={setMiddle}>Middle</button>
            <button className={css.btn + ' ' + css.btnLow} onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
