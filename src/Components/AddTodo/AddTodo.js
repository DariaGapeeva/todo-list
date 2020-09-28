import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { required } from '../../utilities/validators';
import { Input } from '../common/form';

const styles = {
	div: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		border: '1px solid green',
		borderRadius: 5,
		padding: '15px',
		marginBottom: '10px',
	},
	button: {
		borderRadius: 5,
		backgroundColor: 'lavender'
	}

}


const AddTodoForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit} >
			<Field component={Input} type="text" name="task" validate={[required]} placeholder='Добавь задачу' autoFocus={true} />
			<button style={styles.button}>Добавить</button>
		</form>

	)
}

const afterSubmit = (result, dispatch) => {
	dispatch(reset('addTodo'))
}


const AddTodoFormRedux = reduxForm({
	form: 'addTodo',
	onSubmitSuccess: afterSubmit,
})(AddTodoForm)

const AddTodo = (props) => {

	const onSubmit = (formData) => {
		props.addTask(formData.task, props.day)
	}

	return (
		<div>
			<AddTodoFormRedux onSubmit={onSubmit} />
		</div>
	)
}


export default AddTodo;