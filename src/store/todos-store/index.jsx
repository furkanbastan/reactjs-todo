import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todos: [],
};

export const { reducer, actions } = createSlice({
    name: "todos",
    initialState,
    reducers: {
        getTodos: (state, action) => {
            state.todos = localStorage.getItem("todos")
                ? JSON.parse(localStorage.getItem("todos"))
                : [];
        },
        addTodo: (state, action) => {
            state.todos = [...state.todos, action.payload];
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload
            );
            localStorage.setItem("todos", JSON.stringify(state.todos));
        },
    },
});
