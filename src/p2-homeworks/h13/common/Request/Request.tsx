import React, {useState, ChangeEvent} from 'react';
import SuperCheckbox from '../../../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from '../../../h4/common/c2-SuperButton/SuperButton';
import {RequestsApi} from '../../api/api';
import s from './Request.module.css'

const Request = () => {

    // const options: Array<string> = ['dark', 'red', 'some', 'awesome'];
    const [checked, setChecked] = useState<boolean>(false)
    const [result, setResult] = useState<string>('')
    const [resultClass, setResultClass] = useState<string>(s.usual)


    const sendRequest = () => {
        RequestsApi
            .post(checked)
            .then(response => {
                // console.log(response)
                setResultClass(s.success)
                setResult(response.data.errorText)
            })
            .catch(error => {
                console.log(error)
                setResultClass(s.error)
                // setResult(error.message)
                setResult(error.response ? error.response.data.errorText : error.message)
            })
    }

    const changeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.currentTarget.checked)
    }

    return (
        <div>
            {/*<MySuperCheckbox options={options}/>*/}
            <SuperCheckbox checked={checked} onChange={changeCheckbox}/>
            <SuperButton onClick={sendRequest}>Send</SuperButton>
            <div className={s.resultBlock}>
                <span className={resultClass}>result: </span>
                <span>{result}</span>
            </div>
        </div>
    );
};

export default Request;