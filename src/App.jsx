import { useState } from "react";
// import "./styles.css";

export default function App() {
  const [taskList, setTaskList] = useState([]);
  const [text, setText] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  const addTask = () => {
    if (text.trim() !== "") {
      setTaskList([...taskList, text]);
      setText("");
    }
  };

  const removeTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  const editTask = (index) => {
    setEditIndex(index);
  };

  const saveEditedTask = (index, editText) => {
    const updatedTaskList = [...taskList];
    updatedTaskList[index] = editText;
    setTaskList(updatedTaskList);
    setEditIndex(-1);
  };

  return (
    <div className="App">
      <h1>To Do List</h1>
      <input
        type="text"
        placeholder="Add a task"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="add" onClick={addTask}>
        Add Task
      </button>

      <h3>Task List</h3>
      <div>
        {taskList.map((item, index) => (
          <div key={index} className="task-list">
            {editIndex === index ? (
              <div>
                <input
                  value={taskList[index]}
                  onChange={(e) => {
                    const updatedTaskList = [...taskList];
                    updatedTaskList[index] = e.target.value;
                    setTaskList(updatedTaskList);
                  }}
                />
                <button onClick={() => saveEditedTask(index, taskList[index])}>
                  Save
                </button>
              </div>
            ) : (
              <div>
                <p>{item}</p>
                <button onClick={() => removeTask(index)}>Remove</button>
                <button onClick={() => editTask(index)}>Edit</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
