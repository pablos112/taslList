import TaskItem from "./TaskItem";
export default function CompletedTaskList({ deleteTask, completedTasks }) {
  return (
    <ul className="completed-task-list">
      {completedTasks.map((task) => (
        <TaskItem deleteTask={deleteTask} key={task.id} task={task} />
      ))}
    </ul>
  );
}
