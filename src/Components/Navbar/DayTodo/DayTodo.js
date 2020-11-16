import React from "react";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import TodoItemWeek from "./TodoItemWeek/TodoItemWeek";

const TaskList = styled.li`
  list-style-type: none;
  border: 1px solid green;
  border-radius: 8px;
  margin-bottom: 15px;
  margin-top: 15px;
  padding: 20px;
  transition: background-color 0.2s ease;
  background-color: ${(props) =>
    props.isDraggingOver ? "Gainsboro" : "lavender"};
`;

const DayTodo = (props) => {
  let array = props.todos.filter((item) => item.day === props.day);

  return (
    <Droppable droppableId={props.day}>
      {(provided, snapshot) => (
        <TaskList
          {...provided.droppableProps}
          ref={provided.innerRef}
          isDraggingOver={snapshot.isDraggingOver}
        >
          {array.length === 0
            ? "задач нет"
            : array.map((item, index) => (
                <TodoItemWeek
                  key={item.id}
                  done={item.done}
                  task={item.task}
                  id={item.id}
                  index={props.todos.indexOf(item)}
                  idTaskInDay={index + 1}
                />
              ))}
          {provided.placeholder}
        </TaskList>
      )}
    </Droppable>
  );
};

export default DayTodo;
