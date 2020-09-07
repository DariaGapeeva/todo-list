import React from 'react';
import TodoContainer from './Components/TodoContainer';



const styles = {
	wrapper: {
		width: 1000,
		margin: '0px auto'
	},
	h1: {
		textAlign: 'center'
	}
}

function App() {
	return (
		<div style={styles.wrapper}>
			<h1 style={styles.h1}>Список дел</h1>
			<TodoContainer />

		</div>
	);
}

export default App;
