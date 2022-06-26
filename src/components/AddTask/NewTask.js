import React from "react";

import TaskForm from "./TaskForm";
import { useHttp } from "../../hooks/use-http";

const AddTask = (props) => { 
  const { isLoading, error, sendRequests } = useHttp();  

  const callback = (taskText, applyData) => {
    props.onAddTask({key: applyData.name, text: taskText});
  };

  const addTaskHandler = (taskText) => { 
    sendRequests({
      URL: "https://react-http-customhooks-test-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { text: taskText },
    }, callback.bind(null, taskText));
  };

  return <TaskForm isLoading={isLoading} error={error} onAddTask={addTaskHandler} />;
};

export default AddTask;
