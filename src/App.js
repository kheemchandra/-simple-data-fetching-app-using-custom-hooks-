import React, { Fragment } from 'react';

import AddTask from './components/AddTask/NewTask';
import TaskList from './components/Tasks/TaskList';

function App(){
  return <Fragment>
    <AddTask />
    <TaskList />
  </Fragment> 
}

export default App;