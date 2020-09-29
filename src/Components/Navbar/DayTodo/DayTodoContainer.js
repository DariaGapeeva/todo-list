import DayTodo from './DayTodo';
import { connect } from 'react-redux';



const mapStateToProps = (state) => {
	return {
		todos: state.todoList.todos
	}
}

export default connect(mapStateToProps)(DayTodo) 