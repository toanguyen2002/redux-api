import { configureStore } from '@reduxjs/toolkit'
import createTodos from './redux/createTodos'

export default configureStore({
    reducer: {
        todos: createTodos
    }
})