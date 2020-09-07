
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const CHECKED = "CHECKED";


const initialState = {
	todos: [{ id: 1, task: 'Купить молоко', done: false },
	{ id: 2, task: 'Купить масло', done: false },
	{ id: 3, task: 'Помыть пол', done: false },
	{ id: 4, task: 'Погулять в парке', done: false },
	{ id: 5, task: 'Заплатить за телефон', done: false },]
}

export const todoReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK: {
			let newTask = {
				id: state.todos.length + 1,
				task: action.task,
				done: false
			}
			return {
				...state,
				todos: [...state.todos, newTask]
			}
		}
		case DELETE_TASK: {

			return {
				...state,
				todos: state.todos.filter(item => item.id !== action.id)
			}
		}
		case CHECKED: {
			return {
				...state,
				todos: state.todos.map(item => item.id === action.id ? { ...item, done: !item.done } : item)
			}
		}

		default: return state
	}

}

export const deleteTaskAC = (id) => ({ type: DELETE_TASK, id });
export const addTaskAC = (task) => ({ type: ADD_TASK, task });
export const checkedAC = (id) => ({ type: CHECKED, id })

