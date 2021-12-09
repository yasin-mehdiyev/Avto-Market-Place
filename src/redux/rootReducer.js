import { configureStore } from "@reduxjs/toolkit";
import ManuSlice from "./features/Manufacture/ManuSlice";

const store = configureStore({
    reducer: {
        manufactures: ManuSlice,
    }
});

export default store;