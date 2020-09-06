import { createStore, combineReducers } from 'redux';
import { todoReduser } from './redusers'

let redusers = combineReducers({
	todoList: todoReduser
})

let store = createStore(redusers);

window.store = store;

export default store;