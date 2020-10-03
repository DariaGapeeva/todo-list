import React from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Input from '../common/form';


const StyledButton = styled.button`
		border-radius: 5px;
		background-color: lavender;	

		
`;



const AddTodoForm = (props) => {
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = data => {
		props.addTask(data.task, props.day);
		reset(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} >
			<Input register={register} required type="text"
				label="task" placeholder='Добавь задачу' autoFocus={true} />
			<StyledButton>Добавить</StyledButton>
		</form>
	)

}


export default AddTodoForm;