import React from 'react';
import classes from './Card.module.css';
function Card(props) {
   return (
      <div className={classes.card_column} >
         <div className={classes.column_icon}><img src={props.icon} alt="Иконка колонки" /></div>
         <div className={classes.column_title}>{props.subtitle}</div>
         <div className={classes.column_text}>Vestibulum tristique urna eget odio interdum pellentesque. In sodales venenatis lectus, ac tincidunt quam placerat egestas.</div>
      </div>
   )
}
export default Card;