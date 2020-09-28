import React from 'react';
import TodoContainer from '../TodoContainer';

const styles = {
	container: {
		display: 'flex',
		marginTop: 30

	},
	item: {
		border: '1px solid green',
		width: '13%',
		marginLeft: 5,
		marginRight: 5

	},
	title: {
		fontWeight: 700
	}
}



const Week = () => {
	const week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье']


	return (
		<div style={styles.container}>
			{week.map(item => <div style={styles.item}>
				<div style={styles.title}>{item} </div>
				<TodoContainer />
			</div>)}
		</div>
	)
}

export default Week;