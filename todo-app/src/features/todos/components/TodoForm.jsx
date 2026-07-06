import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";

export function TodoForm({ text, setText, addTodo }) {
  return (
    <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
        style={{ flex: 1, padding: "0.5rem" }}
      />
      <Button onClick={addTodo}>Add</Button>
    </div>
  );
}
