import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import classes from './Contact.module.css';
import TitleBlock from './TitleBlock';
function Contact() {
   return (
      <div className={classes.ContactUs}>
         <div className="container">
            <div className={classes.Contact}>
               <TitleBlock title='Contact Us' />
               <div className={classes.Contact_text}>
                  <div style={{ marginBottom: '15px' }}>shield.info@gmail.com</div>
                  <div>+91 - 99xxx 000xx</div>
               </div>
               <TitleBlock title='Follow Us' />
               <div className={classes.network}>
                  <Link to="##" >
                     <img src='../../img/facebook.svg' alt="Фейсбук" />
                  </Link>
                  <Link to="##" >
                     <img src='../../img/twitter.svg' alt="Твиттер" />
                  </Link>
                  <Link to="##" >
                     <img src='../../img/youtube.svg' alt="Ютуб" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Contact;