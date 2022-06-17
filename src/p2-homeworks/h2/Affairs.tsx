import React from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'
import css from './Affairs.module.css'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType) => void
    deleteAffairCallback: (_id: number) => void
    filter: FilterType
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

            {/*<button className={css.btn + ' ' + css.btnAll} onClick={setAll}>All</button>
            <button className={css.btn + ' ' + css.btnHigh} onClick={setHigh}>High</button>
            <button className={css.btn + ' ' + css.btnMiddle} onClick={setMiddle}>Middle</button>
            <button className={css.btn + ' ' + css.btnLow} onClick={setLow}>Low</button>*/}
            <SuperButton className={`${css.btnAll} ${props.filter === 'all' ? css.active : ''}`}
                         onClick={setAll}>All</SuperButton>
            <SuperButton className={`${css.btnHigh} ${props.filter === 'high' ? css.active : ''}`}
                         onClick={setHigh}>High</SuperButton>
            <SuperButton className={`${css.btnMiddle} ${props.filter === 'middle' ? css.active : ''}`}
                         onClick={setMiddle}>Middle</SuperButton>
            <SuperButton className={`${css.btnLow} ${props.filter === 'low' ? css.active : ''}`}
                         onClick={setLow}>Low</SuperButton>
        </div>
    )
}

export default Affairs
