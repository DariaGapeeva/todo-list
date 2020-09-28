import PropTypes from 'prop-types';
import React from 'react';


const styles = {
	li: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		border: '1px solid green',
		borderRadius: 5,
		padding: '15px',
		marginBottom: '10px'
	},
	number: {
		marginLeft:5
	},

	input: {
		marginLeft: 10,
		marginRight: 10

	},
	button: {
		borderRadius: 5,
		backgroundColor: 'lavender'
	}

}

const TodoItem = (props) => {
	//  [] = useState('')



	return (
		<li style={styles.li}>
			<span style={styles.number}> {props.number}
			<input style={styles.input} type='checkbox' checked={props.todos.done} onChange={() => props.checked(props.todos.id)} /> 
			<span style={props.todos.done ? { textDecoration: 'line-through' } : { textDecoration: 'none' }} >{props.todos.task} </span> 
			</span>
			<button style={styles.button} onClick={() => props.deleteTask(props.todos.id)} >&times;</button>
		</li>
	
	)

}

TodoItem.propTypes = {
	todos: PropTypes.object,
	id: PropTypes.number
}
export default TodoItem;