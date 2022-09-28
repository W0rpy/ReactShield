import React from 'react';
import Include from './Include';
import classes from './PriceColumn.module.css';
import Period from './Period';
function PriceColumn({ time }) {
   return (
      <div className={classes.column}>
         <div className={classes.subColumn}>
            <Period timePrice={time} />
         </div>
         <div className={classes.Price}>$ 199.50</div>
         <Include paragraph=' Domain' word='Host 5' />
         <Include paragraph=' Storage' word='2GB NVMe' />
         <Include paragraph=' Bandwidth' word='50GB' />
         <Include paragraph=' SSL Certificate' word='Free' />
         <Include paragraph=' Support' word='24/7' />
         <Include paragraph=' Storage' word='2GB NVMe' />
         <Include paragraph=' SSL Certificate' word='Free' />
         <div className={classes.shell_btn}>
            <button className={classes.Btn}>Buy Now</button>
         </div>
      </div>
   )
}
export default PriceColumn;