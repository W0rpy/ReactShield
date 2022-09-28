import React from 'react';
import PostItem from './PostItem';
import classes from './PostItem.module.css';
function PostList({ posts, remove }) {
   return (
      <div className={classes.PostList}>
         {posts.map((post) => <PostItem post={post} key={post.id} remove={remove} />)}
      </div>
   )
}
export default PostList;