import React from 'react';

import classes from './Task.module.css';

const Task = props => {
  return <li className={classes.task}>{props.children}</li>
};

export default Task;