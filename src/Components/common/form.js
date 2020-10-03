import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
			position: relative;
			border: 1px solid green;
			border-radius: 5px;
			padding: 15px;
			margin-bottom: 10px;	
	`;

const FormInput = styled.input`
			// margin-left: 20px;
			border: transparent;
			border-radius: 5px;
			height: 20px;
			width: 100%;
			//  width: 400px;
			outline: none;
	`;

export const Input = ({ input, type, meta, placeholder, autoFocus }) => {

	return (<Box>
		<FormInput {...input} type={type} meta={meta} placeholder={placeholder} autoFocus={autoFocus} />
	</Box>
	)
}