export const ADD_USERS = "ADD_USERS"

const addUsers = (users) => ({
	type: ADD_USERS,
	payload: users
})

export const loadUsers = () => (dispatch, _, client) => {
	client.get('https://jsonplaceholder.typicode.com/users')
		// Через диспатч добавляем юзеров из запроса
		.then((data) => dispatch(addUsers(data)))
}
