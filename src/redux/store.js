import { createStore, combineReducers } from 'redux';


let redusers = combineReducers({
	todo: todoReduser
})

let store = createStore(redusers);

export default store;