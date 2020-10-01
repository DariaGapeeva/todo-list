
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const CHECKED = "CHECKED";
const MOVE_TASK = "MOVE_TASK";



const initialState = {
	todos: [{ id: '1', index: 1, day: 'Понедельник', task: 'Купить молоко', done: false },
	{ id: '2', index: 2, day: 'Понедельник', task: 'Купить масло', done: false },
	{ id: '3', index: 3, day: 'Понедельник', task: 'Помыть пол', done: false },
	{ id: '4', index: 4, day: 'Вторник', task: 'Погулять в парке', done: false },
	{ id: '5', index: 5, day: 'Вторник', task: 'Заплатить за телефон', done: false },
	{ id: '6', index: 6, day: 'Вторник', task: 'Помыть шкаф', done: false },
	{ id: '7', index: 7, day: 'Среда', task: 'Решить задачу', done: false },
	{ id: '8', index: 8, day: 'Среда', task: 'Йога', done: false },
	{ id: '9', index: 9, day: 'Четверг', task: 'Приготовить торт', done: false },
	{ id: '10', index: 10, day: 'Четверг', task: 'Сходить в МФЦ', done: false },
	{ id: '11', index: 11, day: 'Четверг', task: 'Постирать ковер', done: false },
	{ id: '12', index: 12, day: 'Четверг', task: 'Купить тетради', done: false },
	{ id: '13', index: 13, day: 'Пятница', task: 'Йога', done: false },
	{ id: '14', index: 14, day: 'Суббота', task: 'Бассейн', done: false },
	{ id: '15', index: 15, day: 'Воскресенье', task: 'Робототехника', done: false },
	{ id: '16', index: 16, day: 'Воскресенье', task: 'Прогулка в лесу', done: false },
	]
}

export const todoReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK: {
			let newTask = {
				id: String(state.todos.length + 1),
				index: state.todos.length + 1,
				day: action.day,
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
		case MOVE_TASK: {

			// let taskSource = state.todos.find(item => item.index === action.sourceIndex).task;

			// let taskDestination = state.todos.find(item => item.index === action.destinationIndex).task;
			// return {
			// 	...state,
			// 	todos: state.todos.map(item => {
			// 		if (item.index === action.sourceIndex) {
			// 			return { ...item, day: action.destinationId, task: taskDestination }
			// 		} else if (item.index === action.destinationIndex) {
			// 			return { ...item, day: action.sourceId, task: taskSource }
			// 		} else { return item }
			// 	})

			// }

			let itemSource = state.todos.find(item => item.index === action.sourceIndex);
			// itemSource.day = action.destinationId;
			let newState = {
				...state,
				todos: [...state.todos]

			};

			let indexSource = state.todos.findIndex(item => item.index === action.sourceIndex);
			let indexDestination = state.todos.findIndex(item => item.index === action.destinationIndex);


			newState.todos.splice(indexSource, 1);
			newState.todos.splice(indexDestination, 0, { ...itemSource, day: action.destinationId });

			newState.todos.map((item, index) => {
				item.index = index + 1;
				// item.id = String(index + 1);
			});


			return newState;



		}

		default: return state
	}

}

export const deleteTaskAC = (id) => ({ type: DELETE_TASK, id });
export const addTaskAC = (task, day) => ({ type: ADD_TASK, task, day });
export const checkedAC = (id) => ({ type: CHECKED, id });
export const moveTaskAC = (sourceId, sourceIndex, destinationId, destinationIndex) => ({ type: MOVE_TASK, sourceId, sourceIndex, destinationId, destinationIndex });

