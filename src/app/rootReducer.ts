import { combineReducers } from '@reduxjs/toolkit'
import dummyReducer from 'pages/DummySlice'

const rootReducer = combineReducers({
    dummy: dummyReducer
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
