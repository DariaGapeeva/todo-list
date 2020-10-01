import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components'
import TodoItemWeek from './TodoItemWeek/TodoItemWeek';


// const styles = {
// 	container: {
// 		border: '1px solid green',
// 		borderRadius: 8,
// 		marginBottom: 15,
// 		marginTop: 15,
// 		padding: 15

// 	}
// }

const TaskList = styled.ol`
border: 1px solid green;
border-radius: 8px;
margin-bottom: 15px;
margin-top: 15px;
padding: 20px;
transition: background-color 0.2s ease;
background-color: ${props => (props.isDraggingOver ? 'Gainsboro' : 'lavender')}
`



const DayTodo = (props) => {


	let array = props.todos.filter(item => item.day === props.day)


	return (
		<Droppable
			droppableId={props.day}

		>
			{ (provided, snapshot) => (
				<TaskList
					{...provided.droppableProps}
					ref={provided.innerRef}
					isDraggingOver={snapshot.isDraggingOver}
				>
					{/* <ol> */}
					{/* {array.map(item => <li key={item.id}> <span style={item.done ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}> {item.task} </span></li>)} */}
					{array.map((item, index) => <TodoItemWeek
						key={item.id} done={item.done} task={item.task} id={item.id} index={item.index}

					/>)}
					{provided.placeholder}
					{/* </ol> */}

				</TaskList>
			)}

		</Droppable >
	)
}

export default DayTodo;