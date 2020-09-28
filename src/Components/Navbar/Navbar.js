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

const Navbar = () => {

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



	}


	return (
		<DragDropContext
			onDragEnd={onDragEnd}
		>
			<div styles={styles.navbar}>
				<div styles={styles.navbarItem}>
					<NavLink to='/monday' activeClassName={styles.active} style={styles.link}> Понедельник </NavLink>
					{/* <Droppable
						droppableId='Понедельник'
					>
						{(provided) => (
							<DayTodoContainer
								innerRef={provided.innerRef}
								{...provided.droppableProps}
								{...provided.droppablePlaceholder}
								style={styles.item}
								day='Понедельник'

							>
							
							</DayTodoContainer>
						)
						}
					</Droppable> */}
					<DayTodoContainer id='1' style={styles.item} day='Понедельник' />

				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/tuesday' activeClassName={styles.active} style={styles.link}> Вторник </NavLink>
					<DayTodoContainer id='Вторник' style={styles.item} day='Вторник' />
				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/wednesday' activeClassName={styles.active} style={styles.link}> Среда </NavLink>
					<DayTodoContainer id='Среда' style={styles.item} day='Среда' />
				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/thursday' activeClassName={styles.active} style={styles.link}> Четверг </NavLink>
					<DayTodoContainer id='Четверг' style={styles.item} day='Четверг' />
				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/friday' activeClassName={styles.active} style={styles.link}> Пятница </NavLink>
					<DayTodoContainer id='Пятница' style={styles.item} day='Пятница' />
				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/saturday' activeClassName={styles.active} style={styles.link}> Суббота </NavLink>
					<DayTodoContainer id='Суббота' style={styles.item} day='Суббота' />
				</div>
				<div styles={styles.navbarItem}>
					<NavLink to='/sunday' activeClassName={styles.active} style={styles.link}> Воскресенье </NavLink>
					<DayTodoContainer id='Воскресенье' style={styles.item} day='Воскресенье' />
				</div>
			</div>
		</DragDropContext>
	)
}


export default Navbar;