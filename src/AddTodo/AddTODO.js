import { useState } from "react";

export default function AddTodo({ onAddTodo }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="AddTask"
        value={title}
        onChange={(e) => setTitle(e.target.value)}></input>
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}>
        Add Todo
      </button>
    </>
  );
}
