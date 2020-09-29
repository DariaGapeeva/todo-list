import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

// const styles = {
// 	box: {
// 		border: '1px solid green',
// 		padding: 3,
// 		marginBottom: 8,
// 		borderRadius: 5
// 	}
// }

const Container = styled.li`
border: 1px solid green;
padding: 3px;
margin-bottom: 8px;
border-radius: 5px;
outline:none;
background-color: ${props => (props.isDragging ? 'AliceBlue' : 'lavender')};
`;

const TodoItemWeek = (props) => {
	return (
		<Draggable
			draggableId={props.id}
			index={props.index}
		>
			{(provided, snapshot) => (
				<Container
					{...provided.draggableProps}
					{...provided.dragHandleProps}
					ref={provided.innerRef}
					isDragging={snapshot.isDragging}
				>
					<span style={props.done ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}> {props.task} </span>

				</Container>
			)}
		</Draggable>
	)
}

export default TodoItemWeek; 