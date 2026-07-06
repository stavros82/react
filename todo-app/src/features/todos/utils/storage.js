export const loadTodos = () => {
  const saved = localStorage.getItem("todos");
  return saved ? JSON.parse(saved) : [];
};

export const saveTodos = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};
