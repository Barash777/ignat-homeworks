import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from 'react-redux';
import {changeLoadingAC} from './bll/loadingReducer';
import {AppStateType} from './bll/store';

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector((state: AppStateType) => state.loading.isLoading)
    const dispatch = useDispatch()

    const loadingJSX = (
        <div className="loader"></div>
    )


    const setLoading = () => {
        dispatch(changeLoadingAC(true))
        setTimeout(() => {
            dispatch(changeLoadingAC(false))
        }, 2000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10


            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div>{loadingJSX}</div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
