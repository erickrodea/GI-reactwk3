import { useState } from "react";
import AddTodo from "./AddTodo/AddTODO";
import TaskList from "./TaskList/Tasklist"
import TaskDetail from "./TaskList/TaskDetail";
import AddDetails from "./AddTodo/AddDetails";

let nextId = 3;
const initialTodos = [
  { id: 0, title: 'Buy milk', done: true,  },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Add your Todos', done: false },
];
const initialDetails = [
  { id: 0, title: 'details', done: true,  },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Add your Todos', done: false },
];

export default function TaskApp() {
  const [todos, setTodos] = useState(initialTodos);
  const [details, setDetails] = useState(initialDetails);
  //details
  function handleAddDetails(title) {
    setDetails([
      ...details,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleAddTodo(title) {
    setTodos([
      ...todos,
      {
        id: nextId++,
        title: title,
        done: false
      }
    ]);
  }

  function handleChangeTodo(nextTodo) {
    setTodos(todos.map(t => {
      if (t.id === nextTodo.id) {
        return nextTodo;
      } else {
        return t;
      }
    }));
  }
  function handleDetails(nextDetails) {
    setDetails(todos.map(t => {
      if (t.id === nextDetails.id) {
        return nextDetails;
      } else {
        return t;
      }
    }))
  }

  function handleDeleteTodo(todoId) {
    setTodos(
      todos.filter(t => t.id !== todoId)
    );
  }
  function handleDeleteDetails(detailsId) {
    setDetails(
      todos.filter(t=>t.id !==detailsId)
    )
  }

  return (
    <>
      <AddTodo
        onAddTodo={handleAddTodo}
        onAddDetails={handleAddDetails}
      />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
       
      />
    </>
  );
}

