import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem/TodoItem';
import AddTodoFormRedux from './AddTodo/AddTodo'


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
			<AddTodoFormRedux onSubmit={(formData) => props.addTask(formData.task)} />
		</div>
	)
}

Todo.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Todo;