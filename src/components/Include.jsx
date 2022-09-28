import React from 'react';
import classes from './Include.module.css';
function Include(props) {
   return (<div className={classes.Includes}>
      <span>{props.word}</span>
      {props.paragraph}
   </div>
   )
}
export default Include;