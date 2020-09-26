import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem/TodoItem';
import AddTodo from './AddTodo/AddTodo';



const styles = {
	ol: {
		padding: 0
	}
}

const Todo = (props) => {

	return (
		<div>
			<ol style={styles.ol}>
				{props.todos.map(item => (
					<TodoItem key={item.id} id={props.todos.indexOf(item) + 1} todos={item} deleteTask={props.deleteTask} checked={props.checked} />
				))}
			</ol>

			<AddTodo addTask={props.addTask} />
		</div>
	)
}

Todo.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Todo;