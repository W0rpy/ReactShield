import React from 'react';
import './burger.css';
function Burger({ ...props }) {



   return (
      <div {...props} >
         <span></span>
         <span></span>
         <span></span>
      </div>
   )
}
export default Burger;