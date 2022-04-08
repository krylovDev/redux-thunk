import './App.css';
import UserList from "./components/UserList";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { loadUsers } from "./store/users/users.actions";
import { loadTodos } from "./store/todos/todos.actions";

function App() {
	const dispatch = useDispatch()
	
	useEffect(() => {
		dispatch(loadUsers())
		dispatch(loadTodos())
	}, [])
	
	return (
		<div className="App">
			<h1>Redux Thunk</h1>
			{/*<NewTodo/>*/ }
			<UserList/>
			<TodoList/>
		</div>
	);
}

export default App;
