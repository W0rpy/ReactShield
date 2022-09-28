import React from 'react';
import classes from './Column.module.css';
function Column(props) {
   return (<div className={classes.Column}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.autor}>{props.autor}</div>
      <div className={classes.address}>{props.address}</div>
   </div>
   )
}
export default Column;