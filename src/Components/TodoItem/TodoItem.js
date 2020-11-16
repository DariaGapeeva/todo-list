import React from "react";
import styled from "styled-components";

const Task = styled.span`
  text-decoration: ${(props) => (props.done ? "line-through" : "none")};
`;

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid green;
  border-radius: 5px;
  padding: 15px;
  margin-bottom: 10px;
`;

const Number = styled.span`
  margin-left: 5px;
`;

const Input = styled.input`
  margin-left: 10px;
  margin-right: 10px;
`;

const Button = styled.button`
  border-radius: 5px;
  background-color: lavender;
`;

const TodoItem = (props) => {
  return (
    <Item>
      <Number>
        {" "}
        {props.number}
        <Input
          type="checkbox"
          checked={props.todos.done}
          onChange={() => props.checked(props.todos.id, !props.todos.done)}
        />
        <Task done={props.todos.done}> {props.todos.task}</Task>
      </Number>
      <Button onClick={() => props.deleteTask(props.todos.id)}>&times;</Button>
    </Item>
  );
};

export default TodoItem;
