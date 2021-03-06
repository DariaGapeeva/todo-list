import { array } from "prop-types";
import { sortedArray } from "../utilities/functions";
import { todoApi } from "./../API/api";

const ADD_TASK = "ADD_TASK";
const DELETE_TASK = "DELETE_TASK";
const CHECKED = "CHECKED";
const MOVE_TASK_IN_SAME_COLUMN = "MOVE_TASK_IN_SAME_COLUMN";
const MOVE_TASK_IN_OTHER_COLUMN = "MOVE_TASK_IN_OTHER_COLUMN";
const SET_TODOS = "SET_TODOS";
const SHOW_LOADER = "SHOW_LOADER";
const HIDE_LOADER = "HIDE_LOADER";
const SHOW_LOADER_BUTTON = "SHOW_LOADER_BUTTON";
const HIDE_LOADER_BUTTON = "HIDE_LOADER_BUTTON";

const initialState = {
  todos: [
    //     {
    //       id: "1",
    //       day: "Понедельник",
    //       task: "Купить молоко",
    //       done: false,
    //     },
    //     {
    //       id: "2",
    //       day: "Понедельник",
    //       task: "Купить масло",
    //       done: false,
    //     },
    //     { id: "3", day: "Понедельник", task: "Помыть пол", done: false },
    //     {
    //       id: "4",
    //       day: "Вторник",
    //       task: "Погулять в парке",
    //       done: false,
    //     },
    //     {
    //       id: "5",
    //       day: "Вторник",
    //       task: "Заплатить за телефон",
    //       done: false,
    //     },
    //     { id: "6", day: "Вторник", task: "Помыть шкаф", done: false },
    //     { id: "7", day: "Среда", task: "Решить задачу", done: false },
    //     { id: "8", day: "Среда", task: "Йога", done: false },
    //     {
    //       id: "9",
    //       day: "Четверг",
    //       task: "Приготовить торт",
    //       done: false,
    //     },
    //     { id: "10", day: "Четверг", task: "Сходить в МФЦ", done: false },
    //     {
    //       id: "11",
    //       day: "Четверг",
    //       task: "Постирать ковер",
    //       done: false,
    //     },
    //     {
    //       id: "12",
    //       day: "Четверг",
    //       task: "Купить тетради",
    //       done: false,
    //     },
    //     {
    //       id: "13",
    //       day: "Пятница",
    //       task: "Йога",
    //       done: false,
    //     },
    //     {
    //       id: "14",
    //       day: "Суббота",
    //       task: "Бассейн",
    //       done: false,
    //     },
    //     {
    //       id: "15",
    //       day: "Воскресенье",
    //       task: "Робототехника",
    //       done: false,
    //     },
    //     {
    //       id: "16",
    //       day: "Воскресенье",
    //       task: "Прогулка в лесу",
    //       done: false,
    //     },
  ],
  loading: false,
  loadingButton: false,
};

export const todoReduser = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER_BUTTON: {
      return {
        ...state,
        loadingButton: true,
      };
    }
    case HIDE_LOADER_BUTTON: {
      return {
        ...state,
        loadingButton: false,
      };
    }

    case SHOW_LOADER: {
      return {
        ...state,
        loading: true,
      };
    }
    case HIDE_LOADER: {
      return {
        ...state,
        loading: false,
      };
    }
    case SET_TODOS: {
      const newState = {
        ...state,
        todos: action.todos,
        loading: false,
      };

      return newState;
    }
    case ADD_TASK: {
      let newTask = {
        id: action.id,
        day: action.day,
        task: action.task,
        done: action.done,
        index: state.todos.filter((item) => item.day === action.day).length,
      };
      let filterNewState = state.todos.filter(
        (item) => item.day === action.day
      );
      let currentIndex = state.todos.indexOf(
        filterNewState[filterNewState.length - 1]
      );

      let newState = {
        ...state,
        todos: [...state.todos],
      };

      newState.todos.splice(currentIndex + 1, 0, newTask);
      return newState;
    }
    case DELETE_TASK: {
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.id),
      };
    }
    case CHECKED: {
      return {
        ...state,
        todos: state.todos.map((item) =>
          item.id === action.id ? { ...item, done: !item.done } : item
        ),
      };
    }
    case MOVE_TASK_IN_SAME_COLUMN: {
      let itemSource = state.todos.find(
        (item) => item.id === action.draggableId
      );

      let newState = {
        ...state,
        todos: [...state.todos],
      };

      newState.todos.splice(action.sourceIndex, 1);
      newState.todos.splice(action.destinationIndex, 0, itemSource);

      return newState;
    }
    case MOVE_TASK_IN_OTHER_COLUMN: {
      let itemSource = state.todos.find(
        (item) => item.id === action.draggableId
      );

      let newState = {
        ...state,
        todos: [...state.todos],
      };

      newState.todos.splice(action.sourceIndex, 1);

      let destinationIndex = action.destinationIndex;

      if (action.sourceIndex < action.destinationIndex) {
        destinationIndex = destinationIndex - 1;
      }

      newState.todos.splice(destinationIndex, 0, {
        ...itemSource,
        day: action.destinationId,
      });

      return newState;
    }

    default:
      return state;
  }
};

const showLoader = () => ({ type: SHOW_LOADER });
const hideLoader = () => ({ type: HIDE_LOADER });
const showLoaderButton = () => ({ type: SHOW_LOADER_BUTTON });
const hideLoaderButton = () => ({ type: HIDE_LOADER_BUTTON });

const setTodosAC = (todos) => ({ type: SET_TODOS, todos });

export const deleteTaskAC = (id) => ({ type: DELETE_TASK, id });

const addTaskAC = (task, day, index, done, id) => ({
  type: ADD_TASK,
  task,
  day,
  index,
  done,
  id,
});
export const checkedAC = (id) => ({ type: CHECKED, id });
export const moveTaskInSameColumnAC = (
  sourceIndex,
  destinationIndex,
  draggableId
) => ({
  type: MOVE_TASK_IN_SAME_COLUMN,
  sourceIndex,
  destinationIndex,
  draggableId,
});
export const moveTaskInOtherColumnAC = (
  sourceIndex,
  destinationIndex,
  destinationId,
  draggableId
) => ({
  type: MOVE_TASK_IN_OTHER_COLUMN,
  sourceIndex,
  destinationIndex,
  destinationId,
  draggableId,
});

export const addTaskThunk = (task, day, indexNumber, done) => {
  return async (dispatch) => {
    try {
      dispatch(showLoaderButton());
      const response = await todoApi.addTodo(task, day, indexNumber, done);

      dispatch(hideLoaderButton());
      dispatch(addTaskAC(task, day, indexNumber, done, response.data.name));
    } catch (e) {
      alert(e.message);
    }
  };
};

export const setTodosThunk = (todos) => {
  return async (dispatch) => {
    try {
      dispatch(showLoader());
      const response = await todoApi.getTodos();
      dispatch(hideLoader());
      dispatch(setTodosAC(response));
    } catch (e) {
      alert(e.message);
    }
  };
};

export const deleteTodoThunk = (id, day) => {
  return async (dispatch) => {
    try {
      dispatch(showLoaderButton());
      await todoApi.deleteTodo(id);
      const response = await todoApi.getTodos();
      await Promise.all([
        ...response.map((item, index) => todoApi.reIndex(item.id, index)),
      ]);
      dispatch(hideLoaderButton());
      dispatch(deleteTaskAC(id));
    } catch (e) {
      alert(e.message);
    }
  };
};

export const checkedTodoThunk = (id, done) => {
  return async (dispatch) => {
    try {
      await todoApi.checkedTodo(id, done);
      dispatch(checkedAC(id));
    } catch (e) {
      alert(e.message);
    }
  };
};

export const moveTaskInSameColumnThunk = (
  sourceIndex,
  destinationIndex,
  day,
  draggableId
) => {
  return async (dispatch) => {
    try {
      dispatch(showLoaderButton());
      dispatch(
        moveTaskInSameColumnAC(sourceIndex, destinationIndex, draggableId)
      );
      const response = await todoApi.getTodos();

      const sourceItem = response.find((item) => item.id === draggableId);
      const destinationItem = response[destinationIndex];

      const newArrayDay = sortedArray(response, day);
      //   response
      //     .filter((item) => item.day === day)
      //     .sort((a, b) => (a.index > b.index ? 1 : -1));

      let newSourceIndex = newArrayDay.indexOf(sourceItem);
      let newDestinationIndex = newArrayDay.indexOf(destinationItem);

      console.log("newSourceIndex", newSourceIndex);
      console.log("newDestinationIndex", newDestinationIndex);

      await Promise.all([
        ...newArrayDay.map((item, index) => {
          if (newSourceIndex < index && index <= newDestinationIndex) {
            return todoApi.reIndex(item.id, index - 1);
          }

          if (newDestinationIndex <= index && index < newSourceIndex) {
            return todoApi.reIndex(item.id, index + 1);
          }
        }),
      ]);
      await todoApi.reIndex(draggableId, newDestinationIndex);

      dispatch(hideLoaderButton());
    } catch (e) {
      alert(e.message);
    }
  };
};

export const moveTaskInOtherColumnThunk = (
  sourceIndex,
  sourceId,
  destinationIndex,
  destinationId,
  draggableId
) => {
  return async (dispatch) => {
    try {
      dispatch(showLoaderButton());
      dispatch(
        moveTaskInOtherColumnAC(
          sourceIndex,
          destinationIndex,
          destinationId,
          draggableId
        )
      );
      const response = await todoApi.getTodos();

      console.log(array, "array");
      const sourceItem = response.find((item) => item.id === draggableId);
      const destinationItem = response[destinationIndex];

      const arraySource = sortedArray(response, sourceId);
      //   response
      //     .filter((item) => item.day === sourceId)
      //     .sort((a, b) => (a.index > b.index ? 1 : -1));

      const arrayDestination = sortedArray(response, destinationId);
      //   response
      //     .filter((item) => item.day === destinationId)
      //     .sort((a, b) => (a.index > b.index ? 1 : -1));

      let newSourceIndex = arraySource.indexOf(sourceItem);
      let newDestinationIndex =
        arrayDestination.indexOf(destinationItem) !== -1
          ? arrayDestination.indexOf(destinationItem)
          : arrayDestination.length;

      console.log("newSourceIndex", newSourceIndex);
      console.log("newDestinationIndex", newDestinationIndex);

      await Promise.all([
        ...arraySource.map((item, index) => {
          if (index > newSourceIndex) {
            return todoApi.reIndex(item.id, index - 1);
          }
        }),
        ...arrayDestination.map((item, index) => {
          if (index >= newDestinationIndex) {
            return todoApi.reIndex(item.id, index + 1);
          }
        }),
        todoApi.moveTodo(draggableId, destinationId),
        todoApi.reIndex(draggableId, newDestinationIndex),
      ]);
      //   }

      dispatch(hideLoaderButton());
    } catch (e) {
      alert(e.message);
    }
  };
};
