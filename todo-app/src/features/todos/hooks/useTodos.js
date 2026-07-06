import { useEffect, useState } from "react";
import { loadTodos, saveTodos } from "../utils/storage";

export function useTodos() {
  const [todos, setTodos] = useState(() => loadTodos());
  const [text, setText] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    saveTodos(todos);
  }, [todos]);

  const addTodo = () => {
    if (text.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text,
      done: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText("");
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const activeCount = todos.filter((todo) => !todo.done).length;
  const completedCount = todos.filter((todo) => todo.done).length;

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") return !todo.done;
    if (filter === "completed") return todo.done;
    return true;
  });

  return {
    todos,
    filteredTodos,
    text,
    setText,
    filter,
    setFilter,
    activeCount,
    completedCount,
    addTodo,
    toggleTodo,
    deleteTodo,
    updateTodo,
  };
}
