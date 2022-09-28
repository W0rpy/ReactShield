import React from 'react';
import classes from './Statistic.module.css';
function Statistic(props) {
   return (
      <div className={classes.statistic_column} >
         <div className={classes.statistic_number}>{props.number}</div>
         <div className={classes.statistic_text}>{props.text}</div>
      </div >
   )
}
export default Statistic;