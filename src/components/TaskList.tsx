import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../redux/store"; // 👈 usa import type
import { editTask, deleteTask } from "../redux/slices/toDoSlice";
import { useState } from "react";


const TaskList = () => {
  const tasks = useSelector((state: RootState) => state.toDo.tasks);
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const handleEdit = (taskId: number, title: string, description: string) => {
    setEditingId(taskId);
    setEditTitle(title);
    setEditDescription(description);
  };

  const handleSave = (id: number) => {
    dispatch(editTask({ id, title: editTitle, description: editDescription }));
    setEditingId(null);
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          {editingId === task.id ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />
              <button onClick={() => handleSave(task.id)}>Save</button>
              <button onClick={() => setEditingId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <strong>{task.title}</strong>: {task.description}
              <button
                onClick={() =>
                  handleEdit(task.id, task.title, task.description)
                }
              >
                Edit
              </button>
              <button onClick={() => dispatch(deleteTask(task.id))}>
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
