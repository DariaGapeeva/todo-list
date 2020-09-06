import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem/TodoItem';


const Todo = (props) => {
	return (
		<div>
			<ol>
				{props.todos.map(item => (
					<TodoItem key={item.id} id={props.todos.indexOf(item) + 1} todos={item} deleteTask={props.deleteTask} checked={props.checked} />
				))}
			</ol>
		</div>
	)
}

Todo.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Todo;