import React from "react";
import "./App.css";
import Header from "./Header/Header";
import ListTitle from "./ListTitle/ListTitle";
import AddTaskItem from "./AddTaskItem/AddTaskItem";
import TaskItem from "./TaskItem/TaskItem";
import NewList from "./CreateNewList/NewList";
function App() {
  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-6 col-md-4">
            <NewList />
            <ListTitle />
            <AddTaskItem />
            <TaskItem />
            <TaskItem />
            <TaskItem />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
