import React from 'react';

import Section from '../UI/Section/Section';
import classes from './TaskForm.module.css';

const TaskForm = props => {
  return <Section>
    <form className={classes.form}>
    <input type='text' required />
    <button>Add Task</button>
  </form>
  {/* <p className={classes['error-message']}>Failed to fetch</p> */}
  </Section>
};

export default TaskForm;