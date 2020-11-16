import axios from "axios";

const instance = axios.create({
  baseURL: "https://todo-list-e1cb3.firebaseio.com/",
});

export const todoApi = {
  getTodos() {
    return instance.get("todos.json");
  },
  addTodo(task, day, done) {
    return instance.post("todos.json", {
      task: task,
      day: day,
      done: done,
    });
  },
  deleteTodo(id) {
    return instance.delete(`todos/${id}.json`);
  },
  checkedTodo(id, done) {
    return instance.patch(`todos/${id}.json`, {
      done: done,
    });
  },
  moveTodo(id, day) {
    return instance.patch(`todos/${id}.json`, {
      day: day,
    });
  },
};
