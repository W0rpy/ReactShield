import React from 'react';
import classes from './TitleBlock.module.css';
function TitleBlock(props) {
   return (
      <h3 className={classes.TitleBlock}>{props.title}</h3>
   )
}
export default TitleBlock;