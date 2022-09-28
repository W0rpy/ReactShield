import React from 'react';
import './../App.css';
import TitleBlock from './TitleBlock';
import classes from './Searvice.module.css';
import Card from './Card';
import iCon1 from './../img/icon_1.svg';
import iCon2 from './../img/icon_2.svg';
import iCon3 from './../img/icon_3.svg';
import iCon4 from './../img/icon_4.svg';
import iCon5 from './../img/icon_5.svg';
import iCon6 from './../img/icon_6.svg';
function Searvice() {
   return (
      <div className={classes.shell}>
         <div className="container">
            <div className={classes.our_services}>
               <TitleBlock title='Our Services' />
               <div className={classes.Hosting}>
                  <Card icon={iCon1} subtitle='Shared Web Hosting' />
                  <Card icon={iCon2} subtitle='VPS  Hosting' />
                  <Card icon={iCon3} subtitle='Dedicated Server ' />
                  <Card icon={iCon4} subtitle='Cloud Hosting' />
                  <Card icon={iCon5} subtitle='Domain Names' />
                  <Card icon={iCon6} subtitle='License Keys' />
               </div>
            </div>
         </div>
      </div>
   )
}
export default Searvice;