import { configureStore } from "@reduxjs/toolkit";
import sliceGoals from "./sliceGoals";
import sliceTasks from "./sliceTasks";

export const store = configureStore({
    reducer: {
        sliceGoals,
        sliceTasks,
    }
});