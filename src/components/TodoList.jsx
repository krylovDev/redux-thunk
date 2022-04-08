import React from 'react';
import { useSelector } from "react-redux";

const TodoList = () => {
	const { list: todos, status, error } = useSelector(({ todos }) => todos)
	return (
		<div>
			Количество todo: { todos.length } . Статус: { status }
			{ error
				? <h4 style={ { color: "red" } }>{ error }</h4>
				: <h4 style={ { color: "green" } }> Успешно </h4>
			}
		</div>
	);
};

export default TodoList;
