import React from 'react';
import s from './HW12.module.css';
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../h10/bll/store';
import {changeThemeAC, themeCase} from './bll/themeReducer';

const themes: Array<themeCase> = ['dark', 'red', 'some', 'awesome'];

function HW12() {
    // const theme = 'dark'; // useSelector
    const theme = useSelector<AppStateType, themeCase>(state => state.theme.theme)
    const dispatch = useDispatch()

    // useDispatch, onChangeCallback
    const onChangeOption = (theme: themeCase) => {
        // console.log('change! theme = ', theme)
        dispatch(changeThemeAC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}
            <SuperRadio
                name={'themeRadio'}
                options={themes}
                value={theme}
                onChangeOption={onChangeOption}
            />

            <hr/>
        </div>
    );
}

export default HW12;
