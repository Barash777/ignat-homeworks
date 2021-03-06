import React, {SelectHTMLAttributes, DetailedHTMLProps, ChangeEvent} from 'react'
import css from './SuperSelect.module.css'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperSelect: React.FC<SuperSelectPropsType> = (
    {
        options,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const mappedOptions: any[] = options ? options.map((o, index) => {
        return <option key={index} value={o}>{o}</option>
    }) : [];

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        // onChange, onChangeOption
        onChange && onChange(e)

        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select onChange={onChangeCallback} {...restProps} className={css.select}>
            {mappedOptions}
        </select>
    )
}

export default SuperSelect
