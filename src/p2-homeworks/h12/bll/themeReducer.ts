export type themeCase = 'dark' | 'red' | 'some' | 'awesome'

const initState = {
    theme: 'dark' as themeCase
};

export type ThemeInitialStateType = typeof initState


export const themeReducer = (state: ThemeInitialStateType = initState, action: ThemeUnionType): ThemeInitialStateType => {
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {
                ...state,
                theme: action.payload.theme
            };
        }
        default:
            return state;
    }
};


type ThemeUnionType = ChangeThemeAC;

type ChangeThemeAC = ReturnType<typeof changeThemeAC>

export const changeThemeAC = (theme: themeCase) => {
    return {
        type: 'CHANGE-THEME',
        payload: {
            theme
        }
    } as const
};