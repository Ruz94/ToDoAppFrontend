import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
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
  const [lists, setLists] = useState([]);

  useEffect(() => {
    axios
      .get("https://1f0n1weqrd.execute-api.eu-west-2.amazonaws.com/dev/lists/")
      .then((response) => {
        setLists(response.data.lists);
      })
      .catch((error) => {
        console.log("Error fetching data", error);
      });
  }, []);

  const addList = (newTitle) => {
    const newList = {
      title: newTitle,
      dateCreated: Date.now(),
    };

    axios
      .post("https://1f0n1weqrd.execute-api.eu-west-2.amazonaws.com/dev/lists/", newList)
      .then((response) => {
        const resList = response.data.lists.find(({ title }) => {
          return title === newTitle;
        });
        setLists([...lists, resList]);
      })
      .catch((error) => {
        console.log("Error adding a list", error);
      });
  };

  const updateList = (newTitle, id) => {
    const amendedList = {
      title: newTitle,
      dateCreated: Date.now(),
    };
    axios
      .put(`https://1f0n1weqrd.execute-api.eu-west-2.amazonaws.com/dev/lists/${id}`, amendedList)
      .then((response) => {
        const putLists = lists.map((list) => {
          if (list.listId === id) {
            return { ...list, title: newTitle };
          }
          return list;
        });
        setLists(putLists);
      })
      .catch((error) => {
        console.log("Error updating a list", error);
      });
  };
  const modifyList = (newTitle, id) => {
    if (id) {
      updateList(newTitle, id);
    } else {
      addList(newTitle);
    }
  };

  function deleteList(id) {
    axios
      .delete(`https://1f0n1weqrd.execute-api.eu-west-2.amazonaws.com/dev/lists/${id}`)
      .then((response) => {
        const updatedList = lists.filter((list) => {
          if (list.listId !== id) {
            return list;
          }
          return null;
        });
        setLists(updatedList);
      })
      .catch((error) => {
        console.log("Error deleting list", error);
      });
  }

  const addTask = (task, listId) => {
    const newTask = {
      text: task,
      listId: listId,
      dateCreated: Date.now(),
    };

    axios
      .post("https://1f0n1weqrd.execute-api.eu-west-2.amazonaws.com/dev/tasks", newTask)
      .then((response) => {
        const postTasks = lists.map((list) => {
          const { tasks = [] } = list;
          if (list.listId === listId) {
            return { ...list, tasks: [response.data.task, ...tasks] };
          }
          return list;
        });
        setLists(postTasks);
      })
      .catch((error) => {
        console.log("Error adding a task", error);
      });
  };

  function deleteTask(id) {
    axios
      .delete(`https://1f0n1weqrd.execute-api.eu-west-2.amazonaws.com/dev/tasks/${id}`)
      .then((response) => {
        const delTasks = lists.map((list) => {
          const { tasks = [] } = list;
          return { ...list, tasks: tasks.filter(({ taskId }) => taskId !== id) };
        });
        setLists(delTasks);
      })
      .catch((error) => {
        console.log("Error deleting task", error);
      });
  }

  const updateTask = (task, id) => {
    const amendedTask = {
      text: task,
      dateCreated: Date.now(),
    };
    axios
      .put(`https://1f0n1weqrd.execute-api.eu-west-2.amazonaws.com/dev/tasks/${id}`, amendedTask)
      .then((response) => {
        const putTasks = lists.map((list) => {
          const tasks = list.tasks.map((task) => {
            if (task.taskId === id) {
              task.text = amendedTask.text;
              task.dateCreated = amendedTask.dateCreated;
            }
            return task;
          });
          list.tasks = tasks;
          return list;
        });
        setLists(putTasks);
      })
      .catch((error) => {
        console.log("Error updating a list", error);
      });
  };

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
            <NewList modifyList={modifyList} />
            {lists.map(({ title = "", tasks = [], listId }) => (
              <List
                key={`list_${listId}`}
                listId={listId}
                title={title}
                tasks={tasks}
                deleteTask={deleteTask}
                toggleTask={toggleTask}
                updateTask={updateTask}
                addTask={addTask}
                modifyList={modifyList}
                deleteList={deleteList}
              />
            ))}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
