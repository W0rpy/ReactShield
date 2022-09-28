import React from 'react';
import './Popap.css';
function Popap({ active, setActive, children }) {
   return (
      <div className={active ? "popap_wrapper active" : "popap_wrapper"} onClick={() => setActive(false)}>
         < div className='popap_content' onClick={e => e.stopPropagation()}  >
            <div>{children}</div>
         </div >
      </div >
   )
}
export default Popap;