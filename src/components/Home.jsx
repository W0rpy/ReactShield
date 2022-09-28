import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Home.module.css';
import './../App.css';
function Home() {
   return (
      <div className={classes.content}>
         <div className='container'>
            <div className={classes.web_hosting}>
               <div className={classes.fully_managed}>
                  <h2 className={classes.meneged_title}>Fully Managed Cloud & Web Hosting</h2>
                  <div className={classes.meneged_subtitle}>Deidcated resources, full root access, & easy scaling. It’s the virtual private server you’ve been cravin</div>
                  <div className={classes.pricing}>
                     <Link to='/Pricing' className={classes.view_pricing}>View Pricing</Link>
                  </div>
               </div>
               <div className={classes.picture}>
                  <img src="./img/girl_with_computer.png" alt="Девочка за компьютером" />
               </div>
            </div>
         </div>
      </div>
   )
}
export default Home;