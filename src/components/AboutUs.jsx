import React from 'react';
import Column from './Column';
import './../App.css';
import TitleBlock from './TitleBlock';
import classes from './AboutUs.module.css';
import Statistic from './Statistic';
import PostForm from './PostForm';
import PostList from './PostList';
import { useState } from 'react';
function AboutUs() {
   let [posts, setPosts] = useState([{ id: 1, body: 'Что за рукожоп делал этот сайт?' }, { id: 2, body: 'Вроде нормальная шарага' }]);
   function createPost(newPost) {
      setPosts([...posts, newPost])
   };
   function removePost(post) {
      setPosts(posts.filter((p) => p.id !== post.id))
   }
   return (
      <div>
         <div className={classes.About}>
            <div className="container">
               <div className={classes.AboutUs}>
                  <TitleBlock title='Word From Our Clients' />
                  <div className={classes.clients}>
                     <Column title='Aenean suscipit eu nulla et lacinia. Nulla diam felis, malesuada ut erat quis, mattis dignissim justo.' autor='James Harly' address='Harly web, USA' />
                     <Column title='Aenean suscipit eu nulla et lacinia. Nulla diam felis, malesuada ut erat quis, mattis dignissim justo.' autor='James Harly' address='Harly web, USA' />
                     <Column title='Aenean suscipit eu nulla et lacinia. Nulla diam felis, malesuada ut erat quis, mattis dignissim justo.' autor='James Harly' address='Harly web, USA' />
                  </div>
               </div>
               <div className={classes.Post_block}>
                  <div className={classes.Post_part}>
                     <h4 className={classes.Form_title}>Leave a review</h4>
                     <PostForm create={createPost} />
                     <PostList posts={posts} remove={removePost} />
                  </div>
               </div>
            </div>
         </div>
         <div className={classes.statistic}>
            <div className="container">
               <div className={classes.statistic_block}>
                  <Statistic number='70K' text='Shared Web Hosting' />
                  <Statistic number='100M' text='VPS Hosting' />
                  <Statistic number='11K' text='Dedicated Server' />
                  <Statistic number='199+' text='Cloud Hosting' />
               </div>
            </div>
         </div>
      </div>

   )
}
export default AboutUs;