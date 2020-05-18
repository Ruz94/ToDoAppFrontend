import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Header from "./Header/Header";
import List from "./List/List";
import NewList from "./CreateNewList/NewList";

function App() {
  const [lists, setLists] = useState([
    {
      title: "Shopping List",
      id: uuidv4(),
      dateCreated: Date.now(),
      tasks: [
        { text: "Paint and oil outdoor furniture", completed: true, id: uuidv4(), dateCreated: Date.now() },
        { text: "Hang pictures in bedroom", completed: false, id: uuidv4(), dateCreated: Date.now() },
        { text: "Order party decorations", completed: false, id: uuidv4(), dateCreated: Date.now() },
        { text: "Order replacement printer toner", completed: false, id: uuidv4(), dateCreated: Date.now() },
        { text: "Organise Metrolink refund", completed: true, id: uuidv4(), dateCreated: Date.now() },
      ],
    },
    {
      title: "Shopping List 2",
      id: uuidv4(),
      dateCreated: Date.now(),
      tasks: [
        { text: "Paint and oil outdoor furniture", completed: true, id: uuidv4(), dateCreated: Date.now() },
        { text: "Hang pictures in bedroom", completed: false, id: uuidv4(), dateCreated: Date.now() },
        { text: "Order party decorations", completed: false, id: uuidv4(), dateCreated: Date.now() },
        { text: "Order replacement printer toner", completed: false, id: uuidv4(), dateCreated: Date.now() },
        { text: "Organise Metrolink refund", completed: true, id: uuidv4(), dateCreated: Date.now() },
      ],
    },
  ]);

  //create add task function - console.log("testing")
  const addTask = (task) => {
    console.log("adding");
    //setLists([{ text: task, completed: false, id: uuidv4(), dateCreated: Date.now() }, ...lists]);
  };

  function deleteTask(id) {
    const updatedTasks = lists.map((list) => {
      const { tasks = [] } = list;
      return { ...list, tasks: tasks.filter(({ id: taskid }) => taskid !== id) };
    });
    setLists(updatedTasks);
  }

  function toggleTask(id) {
    const updatedTasks = lists.map((list) => {
      const { tasks = [] } = list;
      // if (task.id === id) {
      //   task.completed = !task.completed;
      // }
      return {
        ...list,
        tasks: tasks.map(({ id: taskid }) => {
          if (taskid === id) {
            tasks.completed = !tasks.completed;
          }
        }),
      };
    });
    setLists(updatedTasks);
  }

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <NewList />
            {lists.map(({ title = "", tasks = [] }) => (
              <List title={title} tasks={tasks} deleteTask={deleteTask} toggleTask={toggleTask} addTask={addTask} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
