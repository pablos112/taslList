import TaskItem from "./TaskItem";
export default function TaskList({ completeTask, activeTasks, deleteTask }) {
  return (
    <ul className="task-list">
      {activeTasks.map((task) => (
        <TaskItem
          completeTask={completeTask}
          deleteTask={deleteTask}
          task={task}
          key={task.id}
        />
      ))}
    </ul>
  );
}
