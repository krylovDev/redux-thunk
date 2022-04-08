import { combineReducers } from "redux";
import { usersReducer } from "./users/users.reducer";
import { todosReducer } from "./todos/todos.reducers";

export const rootReducer = combineReducers({
	users: usersReducer,
	todos: todosReducer
})
