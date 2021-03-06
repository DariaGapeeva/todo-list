import React from "react";
import { NavLink } from "react-router-dom";
import DayTodoContainer from "./DayTodo/DayTodoContainer";
import { DragDropContext } from "react-beautiful-dnd";
import styled from "styled-components";
import Loader from "./../common/Loader";

const LinkElem = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 15px;
  &:hover {
    color: green;
  }
  &.active {
    color: green;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Item = styled.div`
  flex: 0 1 45%;
`;

const Navbar = ({ moveTaskInSameColumn, moveTaskInOtherColumn, loading }) => {
  const onDragStart = () => {};

  const onDragEnd = (result) => {
    const { draggableId, destination, source } = result;

    console.log("result", result);

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    if (destination.droppableId === source.droppableId) {
      moveTaskInSameColumn(
        source.index,
        destination.index,
        source.droppableId,
        draggableId
      );
    } else if (destination.droppableId !== source.droppableId) {
      moveTaskInOtherColumn(
        source.index,
        source.droppableId,
        destination.index,
        destination.droppableId,
        draggableId
      );
    }
  };

  return (
    <>
      {!loading ? (
        <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
          <Content>
            <Item>
              <LinkElem to="/monday"> Понедельник </LinkElem>
              <DayTodoContainer day="Понедельник" />
            </Item>
            <Item>
              <LinkElem to="/tuesday"> Вторник </LinkElem>
              <DayTodoContainer day="Вторник" />
            </Item>
            <Item>
              <LinkElem to="/wednesday"> Среда </LinkElem>
              <DayTodoContainer day="Среда" />
            </Item>
            <Item>
              <LinkElem to="/thursday"> Четверг </LinkElem>
              <DayTodoContainer day="Четверг" />
            </Item>
            <Item>
              <LinkElem to="/friday"> Пятница </LinkElem>
              <DayTodoContainer day="Пятница" />
            </Item>
            <Item>
              <LinkElem to="/saturday"> Суббота </LinkElem>
              <DayTodoContainer day="Суббота" />
            </Item>
            <Item>
              <LinkElem to="/sunday"> Воскресенье </LinkElem>
              <DayTodoContainer day="Воскресенье" />
            </Item>
          </Content>
        </DragDropContext>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Navbar;
