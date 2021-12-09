import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    manuFactures: [],
    productCount: 0,
}

const manuSlice = createSlice({
    name: 'manufactures',
    initialState,
    reducers: {
        setManufactures(state, action) {
            state.manuFactures = action.payload;
        },
        setProductCounter(state, action) {
            state.productCount = action.payload;
        }
    }
});

export const { setManufactures, setProductCounter } = manuSlice.actions;

export default manuSlice.reducer;
