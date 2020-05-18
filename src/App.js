import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header/Header";
import ListTitle from "./ListTitle/ListTitle";
import AddTaskItem from "./AddTaskItem/AddTaskItem";
import TaskItem from "./TaskItem/TaskItem";
import NewList from "./CreateNewList/NewList";

function App() {
  const [tasks, setTasks] = useState([
    { text: "Paint and oil outdoor furniture", completed: true, id: uuidv4(), dateCreated: Date.now() },
    { text: "Hang pictures in bedroom", completed: false, id: uuidv4(), dateCreated: Date.now() },
    { text: "Order party decorations", completed: false, id: uuidv4(), dateCreated: Date.now() },
    { text: "Order replacement printer toner", completed: false, id: uuidv4(), dateCreated: Date.now() },
    { text: "Organise Metrolink refund", completed: true, id: uuidv4(), dateCreated: Date.now() },
  ]);

  //sort tasks by date created then put the uncompleted tasks at the top
  tasks.sort((a, b) => a.dateCreated - b.dateCreated).sort(({ completed }) => (completed ? 1 : -1));

  //create add task function - console.log("testing")
  const addTask = (task) => {
    setTasks([{ text: task, completed: false, id: uuidv4(), dateCreated: Date.now() }, ...tasks]);
  };

  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  }

  function toggleTask(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <NewList />
            <ListTitle />
            <AddTaskItem addTask={addTask} />
            {tasks.map(({ text = "", completed = false, id }) => (
              <TaskItem key={id} id={id} text={text} completed={completed} deleteTask={deleteTask} toggleTask={toggleTask} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
