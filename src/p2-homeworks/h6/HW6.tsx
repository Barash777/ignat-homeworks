import React, {useState} from 'react'
import SuperEditableSpan from './common/c4-SuperEditableSpan/SuperEditableSpan'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {restoreState, saveState} from './localStorage/localStorage'
import css from './HW6.module.css'


const editableSpanLSKey = 'editable-span-value';

function HW6() {
    // default
    const [value, setValue] = useState<string>('')
    // with value from localStorage
    // const [value, setValue] = useState<string>(restoreState<string>(editableSpanLSKey, ''))

    const save = () => {
        saveState<string>(editableSpanLSKey, value)
    }
    const restore = () => {
        setValue(restoreState<string>(editableSpanLSKey, value))
    }

    return (
        <div>
            <hr/>
            homeworks 6

            {/*should work (должно работать)*/}
            <div className={css.forSpan}>
                <SuperEditableSpan
                    value={value}
                    onChangeText={setValue}
                    spanProps={{children: value ? undefined : 'enter text...'}}
                />
            </div>
            <SuperButton onClick={save}>save</SuperButton>
            <SuperButton onClick={restore}>restore</SuperButton>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperEditableSpan/>*/}
            <hr/>
        </div>
    )
}

export default HW6
