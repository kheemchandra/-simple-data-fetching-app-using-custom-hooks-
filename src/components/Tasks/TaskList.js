import React from 'react';

import Section from '../UI/Section/Section';
import Task from './Task';

import classes from './TaskList.module.css';

const TaskList = props => {
  const { isLoading, error } = props;

  let taskList = <h1 className={classes.h1}>No tasks found. Start adding some!</h1>;
  if(props.tasks.length > 0){
    taskList = <ul>{props.tasks.map(task => <Task key={task.key} >{task.text}</Task>)}</ul>;
  }   
  if(error){
    taskList = <button onClick={props.onFetch}>Try again</button>
  }
  if(isLoading){
    taskList = <p>Loading tasks...</p>
  }
  return <Section>
    <ul className={classes.ul}>
    {taskList}
    </ul>
  </Section>

};

export default TaskList;