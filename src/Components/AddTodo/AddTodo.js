import React from 'react';
import { reduxForm, Field, reset } from 'redux-form';
import { required } from '../../utilities/validators';
import { Input } from '../common/form';
import styled from 'styled-components';


// const styles = {
// 	div: {
// 		display: 'flex',
// 		justifyContent: 'space-between',
// 		alignItems: 'center',
// 		border: '1px solid green',
// 		borderRadius: 5,
// 		padding: '15px',
// 		marginBottom: '10px',
// 	},


// }
const StyledButton = styled.button`
		border-radius: 5px;
		background-color: lavender;	
`;

const Container = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		// border: 1px solid green;
		border-radius: 5px;
		// padding: 15px;
		// margin-bottom: 10px;
`;

const AddTodoForm = (props) => {

	return (
		<form onSubmit={props.handleSubmit} >
			<Field component={Input} type="text" name="task" validate={[required]} placeholder='Добавь задачу' autoFocus={true} />
			<StyledButton>Добавить</StyledButton>
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
		<Container>
			<AddTodoFormRedux onSubmit={onSubmit} />
		</Container>
	)
}


export default AddTodo;