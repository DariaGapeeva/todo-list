import React from 'react';



const DayTodo = (props) => {



	return (
		<div>
			<ol>
				{props.todos.filter(item => item.day === props.day).map(item => <li key={item.id}> <span style={item.done ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}> {item.task} </span></li>)}
			</ol>
		</div>
	)
}

export default DayTodo;