import React from 'react';
import classes from './PostItem.module.css';
function PostItem(props) {
   return (
      <div className={classes.Post_shell}>
         <div>{props.post.body}</div>
         <button type='button' className={classes.Button_close} onClick={() => props.remove(props.post)}></button>
      </div>
   )
}
export default PostItem;