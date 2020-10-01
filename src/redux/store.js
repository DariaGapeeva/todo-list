import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { todoReduser } from './todoReduser'

let redusers = combineReducers({
	todoList: todoReduser,
	form: formReducer
})

let store = createStore(redusers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;

export default store;