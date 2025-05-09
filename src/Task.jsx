import {React, useState} from 'react'
import notTask from './assets/notask.png'

function Task() {

const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
      setShowModal(false);
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="task-container">
      <h1>Tasks</h1>

      {tasks.length === 0 ? (
        <img src={notTask} alt="No tasks" className="no-task-image" />
      ) : (
        <table className="task-table">
          <thead>
            <tr>
              <th>S.N</th>
              <th>Task</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task, index) => (
              <tr key={index} className="task-item">
                <td>{index + 1}</td>
                <td>{task}</td>
                <td>
                  <button
                    className="delete-btn"
                    onClick={() => handleDeleteTask(index)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Add Task Button */}
      <button className="add-task-btn" onClick={() => setShowModal(true)}>＋</button>

      {/* Modal */}
      {showModal && (
        <div className="modal-backdrop">
          <div className="modal">
            <h2>Add New Task</h2>
            <input
              type="text"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              placeholder="Enter task..."
            />
            <div className="modal-buttons">
              <button onClick={handleAddTask}>Add</button>
              <button onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Task
