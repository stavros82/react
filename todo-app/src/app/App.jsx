import { useTodos } from "../features/todos/hooks/useTodos";
import { TodoForm } from "../features/todos/components/TodoForm";
import { TodoList } from "../features/todos/components/TodoList";

function App() {
  const {
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
  } = useTodos();

  return (
    <div
      style={{
        padding: "2rem",
        fontFamily: "sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <h1>Todo App</h1>

      <TodoForm text={text} setText={setText} addTodo={addTodo} />

      <div style={{ marginBottom: "1rem" }}>
        <p>Total: {todos.length}</p>
        <p>Active: {activeCount}</p>
        <p>Completed: {completedCount}</p>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
        <button onClick={() => setFilter("all")} disabled={filter === "all"}>
          All ({todos.length})
        </button>
        <button onClick={() => setFilter("active")} disabled={filter === "active"}>
          Active ({activeCount})
        </button>
        <button
          onClick={() => setFilter("completed")}
          disabled={filter === "completed"}
        >
          Completed ({completedCount})
        </button>
      </div>

      <TodoList
        todos={filteredTodos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        updateTodo={updateTodo}
      />
    </div>
  );
}

export default App;
