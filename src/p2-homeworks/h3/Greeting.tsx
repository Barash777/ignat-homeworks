import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from '../h4/common/c1-SuperInputText/SuperInputText';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error ? s.error : '' // need to fix with (?:)

    return (
        <div className={s.someClass}>
            {/*<input placeholder={'Name'} value={name} onChange={setNameCallback} onFocus={setNameCallback}
                   className={inputClass}/>
            <button className={s.btn} onClick={addUser}>add</button>
            <span className={s.counter}>User counter: {totalUsers}</span>
            <div><span className={s.errorMessage}>{error}</span></div>*/}

            <SuperInputText
                onEnter={addUser}
                placeholder={'Name'}
                value={name}
                onChange={setNameCallback}
                onFocus={setNameCallback}
                className={inputClass}
                error={error}
            />
            <SuperButton disabled={name.trim() === ''} onClick={addUser}>add</SuperButton>
            <span className={s.counter}>User counter: {totalUsers}</span>
        </div>
    )
}

export default Greeting
