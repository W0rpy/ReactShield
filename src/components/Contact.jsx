import React from 'react';
import './../App.css';
import { Link } from 'react-router-dom';
import classes from './Contact.module.css';
import TitleBlock from './TitleBlock';
import facebook from "./../img/facebook.svg";
import twitter from './../img/twitter.svg';
import youtube from './../img/youtube.svg';
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
                     <img src={facebook} alt="Фейсбук" />
                  </Link>
                  <Link to="##" >
                     <img src={twitter} alt="Твиттер" />
                  </Link>
                  <Link to="##" >
                     <img src={youtube} alt="Ютуб" />
                  </Link>
               </div>
            </div>
         </div>
      </div>
   )
}
export default Contact;