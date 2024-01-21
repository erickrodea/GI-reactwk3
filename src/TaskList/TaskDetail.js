import { useState } from "react";

export default function TaskDetail({
  details,
  onChangeDetail,
  onDeleteDetails,
}) {
  return (
    <ul>
      {details.map((detail) => (
        <li key={detail.id}>
          <Detail
            detail={detail}
            onChange={onChangeDetail}
            onDelete={onDeleteDetails}
          />
        </li>
      ))}
    </ul>
  );
}

function Detail({ detail, onChange, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  let detailContent;
  if (isEditing) {
    detailContent = (
      <>
        <input
          value={detail.title}
          onChange={(e) => {
            onChange({
              ...detail,
              title: e.target.value,
            });
          }}></input>
        <button onClick={() => setIsEditing(false)}>Save</button>
      </>
    );
  } else {
    detailContent = (
      <>
        {detail.title}
        <button onClick={() => setIsEditing(true)}>Edit</button>
      </>
    );
  }
  return (
    <label>
      <input
        type="text"
        checked={detail.done}
        onChange={(e) => {
          onChange({
            ...detail,
            done: e.target.checked,
          });
        }}
      />
      {detailContent}
      <button onClick={() => onDelete(detail.id)}>Delete</button>
    </label>
  );
}
