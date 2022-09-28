import React from 'react';
import { useState } from 'react';
import MyButton from './MyButton';
import MyInput from './MyInput';
function PostForm({ create }) {
   let [post, setPost] = useState({ body: '' })

   function addNewPost(e) {
      e.preventDefault();
      let newPost = { ...post, id: Date.now() };
      create(newPost);
      setPost({ body: '' });
   }
   return (
      <div >
         <form style={{ display: 'flex', alignItems: 'center' }}>
            <MyInput type="text" value={post.body} onChange={e => setPost({ ...post, body: e.target.value })} placeholder='Enter text...' />
            <MyButton onClick={addNewPost}>Submit</MyButton>
         </form>
      </div>

   )
}
export default PostForm;