import React, { useState } from "react";

import TaskForm from "./TaskForm";

const AddTask = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const addTask = async (taskText) => {    
    setIsLoading(true);
    // setError(null);
    try {
      const response = await fetch(
        "https://react-http-customhooks-test-default-rtdb.firebaseio.com/tasks.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: taskText }),
        }
      ); 
      const data = await response.json(); 
      props.onAddTask({key: data.name, text: taskText});
      setError(false);
    } catch (error) {
      setError(true);
    }
    setIsLoading(false);
  };

  const addTaskHandler = (taskText) => {
    addTask(taskText);
  };

  return <TaskForm isLoading={isLoading} error={error} onAddTask={addTaskHandler} />;
};

export default AddTask;
