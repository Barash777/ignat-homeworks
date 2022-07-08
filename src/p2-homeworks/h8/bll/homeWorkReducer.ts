import {UserType} from '../HW8';

export const homeWorkReducer = (state: Array<UserType>, action: AllActionsType): Array<UserType> => {
    switch (action.type) {
        case 'SORT': {
            if (action.payload === 'up')
                return [...state].sort((a, b) => a.name.localeCompare(b.name))
            else
                return [...state].sort((a, b) => b.name.localeCompare(a.name))
        }
        case 'CHECK': {
            return state.filter(e => e.age >= 18)
        }
        default:
            return state
    }
}

type AllActionsType = sortUpACType | sortDownACType | checkAgeACType
type sortPayloadType = 'up' | 'down'

type sortUpACType = ReturnType<typeof sortUpAC>
export const sortUpAC = () => {
    return {
        type: 'SORT',
        payload: 'up' as sortPayloadType
    } as const
}

type sortDownACType = ReturnType<typeof sortDownAC>
export const sortDownAC = () => {
    return {
        type: 'SORT',
        payload: 'down' as sortPayloadType
    } as const
}

type checkAgeACType = ReturnType<typeof checkAgeAC>
export const checkAgeAC = (age: number) => {
    return {
        type: 'CHECK',
        payload: age
    } as const
}