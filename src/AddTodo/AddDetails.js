import { useState } from "react";

export default function AddDetails({ onAddDetails }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="AddDetails"
        value={title}
        onChange={(e) => setTitle(e.target.value)}></input>
      <button
        onClick={() => {
          setTitle("");
          onAddDetails(title);
        }}>
        Add Task and Details
      </button>
    </>
  );
}
