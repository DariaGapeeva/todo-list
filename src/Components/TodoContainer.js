import { connect } from 'react-redux';
import Todo from './Todo';
import { addTaskAC, deleteTaskAC, checkedAC } from '../redux/redusers'


const mapStatetoProps = (state) => {
	return {
		todos: state.todoList.todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (task) => (dispatch(addTaskAC(task))),
		deleteTask: (id) => (dispatch(deleteTaskAC(id))),
		checked: (id) => (dispatch(checkedAC(id))),

	}
}


const TodoContainer = connect(mapStatetoProps, mapDispatchToProps)(Todo)


export default TodoContainer;