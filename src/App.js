import React, { Fragment, useState, useEffect } from 'react';

import AddTask from './components/AddTask/NewTask';
import TaskList from './components/Tasks/TaskList';

function App(){
  const [isLoading, setIsLoading] = useState(false);
  const[error, setError] = useState(false);
  const [tasks, setTasks]  = useState([]);

  const fetchTasks = async() => {
    setIsLoading(true);
    // setError(null);
    try{
      const response = await fetch("https://react-http-customhooks-test-default-rtdb.firebaseio.com/tasks.json");
      const data = await response.json();

      const loadedTasks = [];
      for(const key in data){
        loadedTasks.push({key: key, text: data[key].text});
      }
      setTasks(loadedTasks);
      setError(false);
    }catch(error){
      setError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTaskHandler = (task) => {
    setTasks(tasks => tasks.concat(task));
  };

  return <Fragment>
    <AddTask onAddTask={addTaskHandler} />
    <TaskList onFetch={fetchTasks} isLoading={isLoading} error={error} tasks={tasks}/>
  </Fragment> 
}

export default App;