export default function TaskItem({ completeTask, task, deleteTask }) {
  const { title, priority, deadline, id } = task;
  return (
    <li className={`task-item ${priority.toLowerCase()}`}>
      <div className="task-info">
        <div>
          {title} <strong>{priority}</strong>
        </div>
        <div className="task-deadline">
          Due : {new Date(deadline).toLocaleString()}
        </div>
      </div>
      <div className="task-buttons">
        {!task.completed && (
          <button onClick={() => completeTask(id)} className="complete-button">
            Complete
          </button>
        )}
        <button onClick={() => deleteTask(id)} className="delete-button">
          Delete
        </button>
      </div>
    </li>
  );
}
