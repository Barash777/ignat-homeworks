import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'
import css from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState<number>(50)
    const [value2, setValue2] = useState<number>(100)
    const min = 0, max = 100;

    const onChangeDoubleRangeHandler = (value: [number, number]) => {
        if (value1 !== value[0])
            setValue1(value[0])
        if (value2 !== value[1])
            setValue2(value[1])
    }

    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div className={css.wrapper}>
                <div>
                    <span className={css.minValue}>{value1}</span>
                    <SuperRange
                        onChangeRange={setValue1}
                        value={value1}
                        min={min}
                        max={max}
                        // сделать так чтоб value1 изменялось
                    />
                </div>

                <div>
                    <span className={css.minValue}>{value1}</span>
                    <SuperDoubleRange
                        min={min}
                        max={max}
                        value={[value1, value2]}
                        onChangeRange={onChangeDoubleRangeHandler}

                        // сделать так чтоб value1 и value2 изменялось
                    />
                    <span>{value2}</span>
                </div>
            </div>

            {/*<div>
                <MultiRangeSlider
                    min={0}
                    max={1000}
                    onChange={({min, max}) => console.log(`min = ${min}, max = ${max}`)}
                />
            </div>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
