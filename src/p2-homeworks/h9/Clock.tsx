import React, {useState} from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import css from './Clock.module.css'

function formatDateToTime(time: Date): string {
    // return time.getHours() + ':' + time.getMinutes() + ':' + time.getSeconds()
    return time.toLocaleTimeString('ru-RU')
}

function formatDateToDate(time: Date): string {
    // return time.getDay() + '.' + time.getMonth().toLocaleString() + '.' + time.getFullYear().toLocaleString()
    return time.toLocaleDateString('ru-RU')
}

function Clock() {
    const [timerId, setTimerId] = useState<number>(0)
    const [date, setDate] = useState<Date>(new Date())
    const [show, setShow] = useState<boolean>(false)

    const stop = () => {
        clearInterval(timerId);
    }
    const start = () => {
        stop()
        const id: number = window.setInterval(() => {
            setDate(new Date())
        }, 1000)
        setTimerId(id)
    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = formatDateToTime(date)
    const stringDate = formatDateToDate(date)

    return (
        <div>
            <div className={css.clock}>
                <div
                    onMouseEnter={onMouseEnter}
                    onMouseLeave={onMouseLeave}
                >
                    {stringTime}
                </div>

                {show && (
                    <div>
                        {stringDate}
                    </div>
                )}
            </div>

            <SuperButton onClick={start}>start</SuperButton>
            <SuperButton onClick={stop}>stop</SuperButton>

        </div>
    )
}

export default Clock
