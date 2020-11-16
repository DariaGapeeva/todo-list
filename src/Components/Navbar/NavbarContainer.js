import { connect } from "react-redux";
import {
  moveTaskInSameColumnAC,
  moveTaskInOtherColumnThunk,
  setTodosThunk,
} from "../../redux/todoReduser";
import React, { useEffect } from "react";
import Navbar from "./Navbar";

const NavbarContainer = (props) => {
  useEffect(() => {
    props.setTodos();
  }, []);

  return (
    <>
      <Navbar
        moveTaskInSameColumn={props.moveTaskInSameColumn}
        moveTaskInOtherColumn={props.moveTaskInOtherColumn}
        loading={props.loading}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  loading: state.todoList.loading,
});

const mapDispatchToProps = (dispatch) => {
  return {
    moveTaskInSameColumn: (sourceIndex, destinationIndex) =>
      dispatch(moveTaskInSameColumnAC(sourceIndex, destinationIndex)),
    moveTaskInOtherColumn: (sourceIndex, destinationIndex, destinationId, id) =>
      dispatch(
        moveTaskInOtherColumnThunk(
          sourceIndex,
          destinationIndex,
          destinationId,
          id
        )
      ),
    setTodos: () => dispatch(setTodosThunk()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);
