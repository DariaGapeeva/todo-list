import React from 'react';
import { NavLink } from 'react-router-dom';
import DayTodoContainer from './DayTodo/DayTodoContainer';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

const styles = {
	navbar: {
		display: 'flex',
	},
	navbarItem: {

	},
	link: {
		textDecoration: 'none',
		color: 'black',
		fontWeight: '600',
		marginBottom: 15
	},

	active: {
		color: 'grey',
	},


}

const Navbar = (props) => {

	const onDragEnd = (result) => {

		const { destination, source, draggableId } = result;

		if (!destination) {
			return;
		};

		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return
		}

		props.moveTask(source.droppableId, source.index, destination.droppableId, destination.index);


	}


	return (
		<DragDropContext
			onDragEnd={onDragEnd}
		>
			<div styles={styles.navbar}>
				<div styles={styles.navbarItem}>
					<NavLink to='/monday' style={styles.link}> Понедельник </NavLink>

					<DayTodoContainer id='1' style={styles.item} day='Понедельник' />

				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/tuesday' style={styles.link}> Вторник </NavLink>
					<DayTodoContainer id='2' style={styles.item} day='Вторник' />
				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/wednesday' style={styles.link}> Среда </NavLink>
					<DayTodoContainer id='3' style={styles.item} day='Среда' />
				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/thursday' style={styles.link}> Четверг </NavLink>
					<DayTodoContainer id='4' style={styles.item} day='Четверг' />
				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/friday' style={styles.link}> Пятница </NavLink>
					<DayTodoContainer id='5' style={styles.item} day='Пятница' />
				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/saturday' style={styles.link}> Суббота </NavLink>
					<DayTodoContainer id='6' style={styles.item} day='Суббота' />
				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/sunday' style={styles.link}> Воскресенье </NavLink>
					<DayTodoContainer id='7' style={styles.item} day='Воскресенье' />
				</div>
			</div>
		</DragDropContext>
	)
}


export default Navbar;