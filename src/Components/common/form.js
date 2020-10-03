import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
			position: relative;
			border:${props => (props.required ? '1px solid green' : '1px solid red')};
			border-radius: 5px;
			padding: 15px;
			margin-bottom: 10px;	
	`;

const FormInput = styled.input`
			border: transparent;
			border-radius: 5px;
			height: 20px;
			width: 100%;			
			outline: none;
	`;

const Input = ({ label, register, required, ...props }) => {
	return (
		<Box required={required}>
			<FormInput name={label} ref={register({ required })} {...props} />
		</Box>
	)
}

export default Input;