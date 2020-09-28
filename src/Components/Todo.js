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
let array = props.todos.filter(item => item.day === props.day);
	return (
		<div>

			<h3>{props.day} </h3>
			<ol style={styles.ol}>
				{array.map(item => (
					<TodoItem key={item.id}  number={array.indexOf(item) + 1 }  todos={item} deleteTask={props.deleteTask} checked={props.checked} />  
				))}
			</ol>

			<AddTodo addTask={props.addTask} day={props.day} />
		</div>
	)
}

Todo.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Todo;