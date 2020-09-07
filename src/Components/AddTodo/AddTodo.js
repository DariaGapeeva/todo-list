import React from 'react';
import { reduxForm, Field } from 'redux-form';

const styles = {
	div: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		border: '1px solid green',
		borderRadius: 5,
		padding: '15px',
		marginBottom: '10px'
	},
	input: {
		marginLeft: 20
	},
	button: {
		borderRadius: 5,
		backgroundColor: 'lavender'
	}

}


const AddTodo = (props) => {
	return (
		<form onSubmit={props.handleSubmit} style={styles.div}>
			<Field component='input' style={styles.input} type="text" />
			<button style={styles.button}>Добавить</button>
		</form>

	)
}

const AddTodoFormRedux = reduxForm({ form: 'addTodo' })(AddTodo)

export default AddTodoFormRedux;