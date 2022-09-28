import React from 'react';
import classes from './Period.module.css';
function Period(props) {
   return (
      <div className={classes.Period}>
         {props.timePrice}
      </div>
   )
}
export default Period;