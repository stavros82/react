import { useState } from "react";

export function TodoItem({ todo, toggleTodo, deleteTodo, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleSave = () => {
    const trimmed = editText.trim();
    if (trimmed === "") return;

    updateTodo(todo.id, trimmed);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditText(todo.text);
    setIsEditing(false);
  };

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "0.5rem",
        padding: "0.5rem",
        border: "1px solid #ccc",
        borderRadius: "6px",
      }}
    >
      <div style={{ flex: 1 }}>
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            style={{ width: "100%", padding: "0.4rem" }}
          />
        ) : (
          <span
            onClick={() => toggleTodo(todo.id)}
            style={{
              cursor: "pointer",
              textDecoration: todo.done ? "line-through" : "none",
            }}
          >
            {todo.text}
          </span>
        )}
      </div>

      <div style={{ display: "flex", gap: "0.4rem" }}>
        {isEditing ? (
          <>
            <button onClick={handleSave}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
}
