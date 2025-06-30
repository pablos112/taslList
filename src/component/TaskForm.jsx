import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Low");
  const [deadline, setDeadline] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() && deadline) {
      addTask({ title, priority, deadline });
      setTitle("");
      setPriority("Low");
      setDeadline("");
    }
  }
  return (
    <form action="" className="task-form" onSubmit={handleSubmit}>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
        placeholder="Task title"
        required
      />
      <select onChange={(e) => setPriority(e.target.value)} value={priority}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <input
        onChange={(e) => setDeadline(e.target.value)}
        type="datetime-local"
        required
        value={deadline}
      />
      <button type="submit">Add task</button>
    </form>
  );
}
