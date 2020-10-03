
const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const CHECKED = "CHECKED";
const MOVE_TASK_IN_SAME_COLUMN = "MOVE_TASK_IN_SAME_COLUMN";
const MOVE_TASK_IN_OTHER_COLUMN = "MOVE_TASK_IN_OTHER_COLUMN";


const initialState = {
	todos: [{ id: '1', index: 0, day: 'Понедельник', task: 'Купить молоко', done: false },
	{ id: '2', index: 1, day: 'Понедельник', task: 'Купить масло', done: false },
	{ id: '3', index: 2, day: 'Понедельник', task: 'Помыть пол', done: false },
	{ id: '4', index: 3, day: 'Вторник', task: 'Погулять в парке', done: false },
	{ id: '5', index: 4, day: 'Вторник', task: 'Заплатить за телефон', done: false },
	{ id: '6', index: 5, day: 'Вторник', task: 'Помыть шкаф', done: false },
	{ id: '7', index: 6, day: 'Среда', task: 'Решить задачу', done: false },
	{ id: '8', index: 7, day: 'Среда', task: 'Йога', done: false },
	{ id: '9', index: 8, day: 'Четверг', task: 'Приготовить торт', done: false },
	{ id: '10', index: 9, day: 'Четверг', task: 'Сходить в МФЦ', done: false },
	{ id: '11', index: 10, day: 'Четверг', task: 'Постирать ковер', done: false },
	{ id: '12', index: 11, day: 'Четверг', task: 'Купить тетради', done: false },
	{ id: '13', index: 12, day: 'Пятница', task: 'Йога', done: false },
	{ id: '14', index: 13, day: 'Суббота', task: 'Бассейн', done: false },
	{ id: '15', index: 14, day: 'Воскресенье', task: 'Робототехника', done: false },
	{ id: '16', index: 15, day: 'Воскресенье', task: 'Прогулка в лесу', done: false },
	]
}

export const todoReduser = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK: {
			let newTask = {
				id: String(state.todos.length + 1),
				index: state.todos.length,
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
		case MOVE_TASK_IN_SAME_COLUMN: {

			let itemSource = state.todos.find(item => item.index === action.sourceIndex);

			let newState = {
				...state,
				todos: [...state.todos]

			};

			let indexSource = state.todos.findIndex(item => item.index === action.sourceIndex);
			let indexDestination = state.todos.findIndex(item => item.index === action.destinationIndex);


			newState.todos.splice(indexSource, 1);
			newState.todos.splice(indexDestination, 0, itemSource);

			newState.todos.map((item, index) => item.index = index);

			return newState;
		}
		case MOVE_TASK_IN_OTHER_COLUMN: {
			let itemSource = state.todos.find(item => item.index === action.sourceIndex);

			let newState = {
				...state,
				todos: [...state.todos]

			};

			let indexSource = state.todos.findIndex(item => item.index === action.sourceIndex);
			let indexDestination = state.todos.findIndex(item => item.index === action.destinationIndex);
			newState.todos.splice(indexSource, 1);

			if (indexSource < indexDestination) {
				indexDestination--;
			}

			newState.todos.splice(indexDestination, 0, { ...itemSource, day: action.destinationId });

			newState.todos.map((item, index) => item.index = index);

			return newState;
		}

		default: return state
	}

}

export const deleteTaskAC = (id) => ({ type: DELETE_TASK, id });
export const addTaskAC = (task, day) => ({ type: ADD_TASK, task, day });
export const checkedAC = (id) => ({ type: CHECKED, id });
export const moveTaskInSameColumnAC = (sourceIndex, destinationIndex) => ({ type: MOVE_TASK_IN_SAME_COLUMN, sourceIndex, destinationIndex });
export const moveTaskInOtherColumnAC = (sourceIndex, destinationIndex, destinationId) => ({ type: MOVE_TASK_IN_OTHER_COLUMN, sourceIndex, destinationIndex, destinationId });




