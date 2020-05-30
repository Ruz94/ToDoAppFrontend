import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

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

  const addList = (newTitle, id) => {
    if (id) {
      const updatedLists = lists.map((list) => {
        if (list.id === id) {
          return { ...list, title: newTitle };
        }
        return list;
      });
      setLists(updatedLists);
    } else {
      setLists([{ title: newTitle, id: uuidv4(), dateCreated: Date.now(), tasks: [] }, ...lists]);
    }
  };

  const addTask = (task, id) => {
    const updatedTasks = lists.map((list) => {
      const { tasks = [] } = list;
      if (list.id === id) {
        return { ...list, tasks: [{ text: task, completed: false, id: uuidv4(), dateCreated: Date.now() }, ...tasks] };
      }
      return list;
    });
    console.log(updatedTasks);
    setLists(updatedTasks);
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
      return {
        ...list,
        tasks: tasks.map((task) => {
          const { id: taskid } = task;
          if (taskid === id) {
            task.completed = !task.completed;
          }
          return task;
        }),
      };
    });
    setLists(updatedTasks);
  }

  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col sm={6} md={4}>
            <NewList addList={addList} />
            {lists.map(({ title = "", tasks = [], id }) => (
              <List
                key={id}
                listId={id}
                title={title}
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                addTask={addTask}
                addList={addList}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
