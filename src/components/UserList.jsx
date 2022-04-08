import React from 'react';
import { useSelector } from "react-redux";

const UserList = () => {
	// Вытаскиваем users из root.reducer
	const users = useSelector(({ users }) => users)
	return (
		<div>
			Количество юзеров: { users.length }
		</div>
	);
};

export default UserList;
