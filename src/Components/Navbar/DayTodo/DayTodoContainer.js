import DayTodo from "./DayTodo";
import { connect } from "react-redux";
import React from "react";

const DayTodoContainer = (props) => {
  return (
    <>
      <DayTodo todos={props.todos} day={props.day} />
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todoList.todos,
  };
};

export default connect(mapStateToProps)(DayTodoContainer);
