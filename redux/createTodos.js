import { createSlice } from '@reduxjs/toolkit'

export const createTodos = createSlice({
    name: 'todos',
    initialState: {
        todos: []
    },
    reducers: {
        getTodo: (state, action) => {
            state.todos.push(...action.payload)
        },
        removeAll: (state, action) => {
            state.todos = []
        },
        addToDo: (state, action) => {
            state.todos.push({ ...action.payload, num: 1 })

        },
        removeTodpo: (state, action) => {
            const todo = state.todos.filter((item) => item.name != action.payload.name)
            state.todos = todo
        },
        updateTodo: (state, action) => {
            state.todos.map((item, index) => {
                if (action.payload.id == item.id) {
                    item.name = action.payload.name
                }
            })
        }
    }
})

export const { getTodo, addToDo, removeTodpo, updateTodo, removeAll } = createTodos.actions;
export default createTodos.reducer