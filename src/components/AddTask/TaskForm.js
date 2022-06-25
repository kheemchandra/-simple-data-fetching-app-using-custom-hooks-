import React, { useRef, useState, useEffect } from 'react';

import Section from '../UI/Section/Section';
import classes from './TaskForm.module.css';

const TaskForm = props => {
  const [ value, setValue ] = useState('');
  const { isLoading, error } = props; 

  const taskRef = useRef();

  const taskHandler = (event) => {
    event.preventDefault();
    let task = taskRef.current.value.trim(); 
    setValue(task);
    props.onAddTask(task); 
  };

  useEffect(() => {
    if(error){
      taskRef.current.value = value;
    }
    else if(!error && !isLoading){
      taskRef.current.value = '';
    }
  }, [error, isLoading, value]);

  
  return <Section>
    <form onSubmit={taskHandler} className={classes.form}>
    <input ref={taskRef} type='text'   required />
    <button type='submit'>{ isLoading ? 'Sending...': 'Add Task'}</button>
  </form>
  {error && !isLoading && <p className={classes['error-message']}>Failed to fetch</p>}
  </Section>
};

export default TaskForm;