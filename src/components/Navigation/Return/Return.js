import React from 'react';

import classes from './Return.css';

const Return = (props) => (
  <div className={classes.Return} onClick={props.back}>
    <div></div>
    <div></div>
    <div></div>
  </div>
);

export default Return;