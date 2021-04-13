import { createSlice } from '@reduxjs/toolkit';

interface IDummyState {
    name: string;
}

const initialDummyState: IDummyState = {
    name: ''
}

const dummySlice = createSlice({
    name: "dummySlice",
    initialState: initialDummyState,
    reducers: {

    }
})

export default dummySlice.reducer