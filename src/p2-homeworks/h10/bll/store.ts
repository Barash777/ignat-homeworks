import {loadingReducer} from './loadingReducer'
import {combineReducers, legacy_createStore as createStore} from 'redux';

const rootReducer = combineReducers({
    loading: loadingReducer,
})

const store = createStore(rootReducer)

export default store

export type AppStateType = ReturnType<typeof rootReducer>

console.log()

// @ts-ignore
// window.store = store // for dev
