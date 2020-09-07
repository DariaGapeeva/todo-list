import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { todoReduser } from './redusers'

let redusers = combineReducers({
	todoList: todoReduser,
	form: formReducer
})

let store = createStore(redusers);

window.store = store;

export default store;