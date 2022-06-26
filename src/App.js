import React, { Fragment, useState, useEffect, useCallback } from "react";

import AddTask from "./components/AddTask/NewTask";
import TaskList from "./components/Tasks/TaskList";
import { useHttp } from "./hooks/use-http";


function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequests } = useHttp();

  const callback = useCallback((applyData) => {
    const loadedTasks = [];
    for (const key in applyData) {
      loadedTasks.push({ key: key, text: applyData[key].text });
    }
    setTasks(loadedTasks);
  }, []);

  const fetchTasks = useCallback(() => {
    sendRequests(
      {
        URL: "https://react-http-customhooks-test-default-rtdb.firebaseio.com/tasks.json",
      },
      callback
    );
  }, [callback, sendRequests]);

  useEffect(() => {
    fetchTasks();
  }, [fetchTasks]);

  const addTaskHandler = (task) => {
    setTasks((tasks) => tasks.concat(task));
  };

  return (
    <Fragment>
      <AddTask onAddTask={addTaskHandler} />
      <TaskList
        onFetch={fetchTasks}
        isLoading={isLoading}
        error={error}
        tasks={tasks}
      />
    </Fragment>
  );
}

export default App;
