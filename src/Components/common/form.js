import React from 'react';

export const Input = ({ input, type, meta, placeholder, autoFocus }) => {

	const hasError = meta.touched && meta.error;

	const styles = {
		box: {
			position: 'relative',
			border: !hasError ? '1px solid green' : '1px solid red',
			borderRadius: 5,
			padding: '15px',
			marginBottom: '10px',

		},
		textError: {
			left: 20,
			bottom: '50%',
			transform: 'translateY(50%)',
			color: 'red',
			position: 'absolute'
		},
		input: {
			marginLeft: 20,
			border: 'transparent',
			borderRadius: 5,
			height: 20,
			width: 300,
			outline: 'none'
		}
	}


	return (<div style={styles.box} >
		<input style={styles.input} {...input} type={type} meta={meta} placeholder={placeholder} autoFocus={autoFocus} />
		{/* {hasError && (<span style={styles.textError} >{meta.error}</span>)} */}
	</div >
	)
}