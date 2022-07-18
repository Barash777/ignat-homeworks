const initState = {
    isLoading: false
}

export type InitialStateType = typeof initState

export const loadingReducer = (state: InitialStateType = initState, action: ChangeLoadingACType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE-LOADING': {
            return {...state, isLoading: action.payload.isLoading}
        }
        default:
            return state
    }
}


export type ChangeLoadingACType = ReturnType<typeof changeLoadingAC>
export const changeLoadingAC = (isLoading: boolean) => {
    return {
        type: 'CHANGE-LOADING',
        payload: {
            isLoading
        }
    } as const
}