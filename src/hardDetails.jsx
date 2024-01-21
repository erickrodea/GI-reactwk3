import React, { useState } from "react";
import AddDetails from "./AddTodo/AddDetails";
import TaskDetail from "./TaskList/TaskDetail";

let nextId = 3;

const initialDetails = [
  { id: 0, title: 'details', done: true, detailTitle: "detail" },
  { id: 1, title: 'Eat tacos', done: false },
  { id: 2, title: 'Add your Todos', done: false },
];

export default function TaskApp() {
  const [details, setDetails] = useState(initialDetails);

  function handleAddDetails(title, detailTitle) {
    setDetails([
      ...details,
      {
        id: nextId++,
        title: title,
        done: false,
        detailTitle: detailTitle,
      }
    ]);
  }

  function handleDetails(nextDetails) {
    setDetails(details.map(t => {
      if (t.id === nextDetails.id) {
        return nextDetails;
      } else {
        return t;
      }
    }));
  }

  function handleDeleteDetails(detailsId) {
    setDetails(
      details.filter(t => t.id !== detailsId)
    );
  }

  return (
    <>
      <AddDetails
        onAddDetails={handleAddDetails}
      />
      <TaskDetail
        details={details}
        onChangeDetail={handleDetails}
        onDeleteDetails={handleDeleteDetails}
      />
    </>
  );
}
