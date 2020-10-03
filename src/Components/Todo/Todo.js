import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from '../TodoItem/TodoItem';
import AddTodo from '../AddTodo/AddTodo';
import styled from 'styled-components';

const List = styled.div`
		padding:0;
`;

const Todo = (props) => {
	let array = props.todos.filter(item => item.day === props.day);
	return (
		<div>
			<h3>{props.day} </h3>
			<List>
				{array.length === 0 ? 'задач нет' : array.map((item, index) => (
					<TodoItem key={item.id} number={index + 1} todos={item} deleteTask={props.deleteTask} checked={props.checked} />
				))}
			</List>

			<AddTodo addTask={props.addTask} day={props.day} />
		</div>
	)
}

Todo.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default Todo;