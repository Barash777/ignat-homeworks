import React, {ChangeEvent} from 'react'
import css from './SuperDoubleRange.module.css'

// тип пропсов обычного инпута
// type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperDoubleRangePropsType = {
    onChangeRange?: (value: [number, number]) => void
    value?: [number, number]
    min?: number
    max?: number
    step?: number
    disabled?: boolean
    className?: string
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        min,
        max,
        step,
        value,
        disabled,
        onChangeRange,
        className
    }
) => {
    // сделать самому, можно подключать библиотеки

    const defMin = 0, defMax = 100, defStep = 1;

    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeRange) {
            // define MIN or MAX was changed
            // console.log(e.target.id)
            const id = e.target.id
            if (id === 'rangeMin') {
                let minValue = +e.currentTarget.value
                const maxValue = value ? value[1] : (max ?? defMax)
                if (minValue > maxValue) {
                    minValue = maxValue
                }
                onChangeRange([minValue, maxValue])
            } else if (id === 'rangeMax') {
                const minValue = value ? value[0] : (min ?? defMin)
                let maxValue = +e.currentTarget.value
                if (maxValue < minValue) {
                    maxValue = minValue
                }
                onChangeRange([minValue, maxValue])
            }
        }
    }

    const finalRangeMinClassName = `${css.range} ${css.rangeMin} ${className ? className : ''}`
    const finalRangeMaxClassName = `${css.range} ${css.rangeMax} ${className ? className : ''}`

    return (
        <>
            {/*<div className={css.wrap} role="group" aria-labelledby="multi-lbl">
                <div id="multi-lbl">Multi thumb slider:</div>
                <label className={css.srOnly} htmlFor="a">Value A:</label>
                <input id="a" type="range" min="-50" value="-30" max="50"/>
                <label className={css.srOnly} htmlFor="b">Value B:</label>
                <input id="b" type="range" min="-50" value="20" max="50"/>
            </div>*/}

            <div className={css.inline}>
                <div className={css.wrap}>
                    <input
                        id={'rangeMin'}
                        className={finalRangeMinClassName}
                        type={'range'}
                        min={min ?? defMin}
                        max={max ?? defMax}
                        step={step ?? defStep}
                        value={value ? value[0] : undefined}
                        onChange={onChangeCallback}
                        disabled={disabled}
                    />
                    <input
                        id={'rangeMax'}
                        className={finalRangeMaxClassName}
                        type={'range'}
                        min={min ?? defMin}
                        max={max ?? defMax}
                        step={step ?? defStep}
                        value={value ? value[1] : undefined}
                        onChange={onChangeCallback}
                        disabled={disabled}
                    />
                </div>
            </div>
        </>
    )
}

export default SuperDoubleRange
