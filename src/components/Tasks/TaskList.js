import React from 'react';

import Section from '../UI/Section/Section';
import Task from './Task';

import classes from './TaskList.module.css';

const DUMMY_TASKS = [
  {id: 't1', text: 'Learning about hooks'},
  {id: 't2', text: 'Second task'},
  {id: 't3', text: 'Late night coding'},
];



const TaskList = props => {
  let taskList = DUMMY_TASKS.map(task => <Task key={task.id} >{task.text}</Task>);
  // taskList = <button>Try again</button>
  // taskList = <p>Loading tasks...</p>
  return <Section>
    <ul className={classes.ul}>
    {taskList}
    </ul>
  </Section>

};

export default TaskList;