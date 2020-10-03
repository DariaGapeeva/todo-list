import React from 'react';
import { NavLink } from 'react-router-dom';
import DayTodoContainer from './DayTodo/DayTodoContainer';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';

const LinkElem = styled(NavLink)`
		text-decoration: none;
		color: black;
		font-weight: 600;
		font-size: 1.3rem;
		margin-bottom: 15px;
		&:hover {
			color:green;
		};
		&.active {
			color:green;
		}
`;

const Content = styled.div`
		display: flex ;
		justify-content: space-between;	
		flex-wrap: wrap;
`;

const Item = styled.div`
		flex: 0 1 45%;
`;

const Navbar = (props) => {

	const onDragStart = () => {

	}

	const onDragEnd = (result) => {

		const { destination, source } = result;

		if (!destination) {
			return;
		};

		if (destination.droppableId === source.droppableId &&
			destination.index === source.index
		) {
			return;
		}

		if (destination.droppableId === source.droppableId) {
			props.moveTaskInSameColumn(source.index, destination.index);
		} else if (destination.droppableId !== source.droppableId) {
			props.moveTaskInOtherColumn(source.index, destination.index, destination.droppableId);
		}

	}


	return (
		<DragDropContext
			onDragStart={onDragStart}
			onDragEnd={onDragEnd}
		>
			<Content>
				<Item>
					<LinkElem to='/monday'> Понедельник </LinkElem>
					<DayTodoContainer day='Понедельник' />
				</Item>
				<Item>
					<LinkElem to='/tuesday'> Вторник </LinkElem>
					<DayTodoContainer day='Вторник' />
				</Item>
				<Item>
					<LinkElem to='/wednesday' > Среда </LinkElem>
					<DayTodoContainer day='Среда' />
				</Item>
				<Item>
					<LinkElem to='/thursday'> Четверг </LinkElem>
					<DayTodoContainer day='Четверг' />
				</Item>
				<Item>
					<LinkElem to='/friday'> Пятница </LinkElem>
					<DayTodoContainer day='Пятница' />
				</Item>
				<Item>
					<LinkElem to='/saturday'> Суббота </LinkElem>
					<DayTodoContainer day='Суббота' />
				</Item>
				<Item>
					<LinkElem to='/sunday'> Воскресенье </LinkElem>
					<DayTodoContainer day='Воскресенье' />
				</Item>
			</Content>
		</DragDropContext >
	)
}


export default Navbar;