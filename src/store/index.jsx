import { configureStore } from "@reduxjs/toolkit";
import { reducer as todosReducer } from "./todos-store";

export const store = configureStore({
    reducer: {
        todos: todosReducer,
    },
});
