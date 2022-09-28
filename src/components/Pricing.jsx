import React from 'react';
import TitleBlock from './TitleBlock';
import classes from './Pricing.module.css';
import PriceColumn from './PriceColumn';
function Pricing() {
   return (
      <div className={classes.Plan}>
         <div className="container">
            <div className={classes.Plan_block}>
               <TitleBlock title='Our Flexible Plan' />
               <div className={classes.Plan_columns}>
                  <PriceColumn time='Monthly' />
                  <PriceColumn time='Quarterly' />
                  <PriceColumn time='Semi Annually' />
                  <PriceColumn time='Annually' />
               </div>
            </div>
         </div>
      </div>
   )
}
export default Pricing;