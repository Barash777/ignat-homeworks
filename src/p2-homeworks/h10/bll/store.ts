import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore as createStore} from 'redux';
import {themeReducer} from '../../h12/bll/themeReducer';

const rootReducer = combineReducers({
    loading: loadingReducer,
    theme: themeReducer
})

const store = createStore(rootReducer)

export default store

export type AppStateType = ReturnType<typeof rootReducer>

console.log()

// @ts-ignore
// window.store = store // for dev
