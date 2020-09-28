import { connect } from 'react-redux';
import Todo from './Todo';
import { addTaskAC, deleteTaskAC, checkedAC } from '../redux/todoReduser'


const mapStateToProps = (state) => {
	return {
		todos: state.todoList.todos
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addTask: (task, day) => (dispatch(addTaskAC(task, day))),
		deleteTask: (id) => (dispatch(deleteTaskAC(id))),
		checked: (id) => (dispatch(checkedAC(id))),

	}
}





export default connect(mapStateToProps, mapDispatchToProps)(Todo)