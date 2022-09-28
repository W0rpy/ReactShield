import React from 'react';
import './../App.css';
import TitleBlock from './TitleBlock';
import classes from './Searvice.module.css';
import Card from './Card';
function Searvice() {
   return (
      <div className={classes.shell}>
         <div className="container">
            <div className={classes.our_services}>
               <TitleBlock title='Our Services' />
               <div className={classes.Hosting}>
                  <Card icon='../../img/icon_1.svg' subtitle='Shared Web Hosting' />
                  <Card icon='../../img/icon_2.svg' subtitle='VPS  Hosting' />
                  <Card icon='../../img/icon_3.svg' subtitle='Dedicated Server ' />
                  <Card icon='../../img/icon_4.svg' subtitle='Cloud Hosting' />
                  <Card icon='../../img/icon_5.svg' subtitle='Domain Names' />
                  <Card icon='../../img/icon_6.svg' subtitle='License Keys' />
               </div>
            </div>
         </div>
      </div>
   )
}
export default Searvice;