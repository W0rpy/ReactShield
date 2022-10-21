import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Header.module.css';
import { useState } from "react";
import Popap from './Popap';
import Burger from './Burger';
import './burger.css';
import '../App.css';
import myImg from "./../img/logo_shield.svg";

function Header() {

   let [activeModal, setactiveModal] = useState(true);
   let [isClick, setIsClick] = useState(false);
   let bodyHidden = document.querySelector('body');
   if (isClick) {
      bodyHidden.classList.add('hidden')
   } else {
      bodyHidden.classList.remove('hidden')
   }

   function stopForm(e) {
      e.preventDefault();
   }

   return (
      <div className={classes.Header_block}>
         <div className={classes.Header_logo}>
            <div className={classes.Header_icon}>
               <img src={myImg} alt="Лого" />
            </div>
            <div className={classes.logo_text}>
               shield
            </div>
         </div>
         <div className={classes.Header_items}>
            <ul className={isClick ? 'header_menu visible' : 'header_menu'} >
               <li><NavLink className={classes.Nav_item} onClick={() => setIsClick(false)} to=''>Home</NavLink></li>
               <li><NavLink className={classes.Nav_item} onClick={() => setIsClick(false)} to='AboutUs'>About Us</NavLink></li>
               <li><NavLink className={classes.Nav_item} onClick={() => setIsClick(false)} to='Searvice' > Searvice</NavLink></li>
               <li><NavLink className={classes.Nav_item} onClick={() => setIsClick(false)} to='Contact' >Contact Us</NavLink></li>
            </ul>
            <Burger className={isClick ? 'menu_burger lock' : 'menu_burger'} onClick={() => setIsClick(!isClick)} />
            <div className={classes.Header_login}>
               <button className={classes.Item_login} onClick={() => setactiveModal(true)}>Login</button>
            </div>
         </div>
         <Popap active={activeModal} setActive={setactiveModal} >
            <form className={classes.Form_login}>
               <h3 className={classes.Form_title}>Введите логин</h3>
               <input className={classes.Form_input} type="text" />
               <h3 className={classes.Form_title}>Введите пароль</h3>
               <input type="text" className={classes.Form_input} />
               <button className={classes.Item_login} onClick={stopForm}>Войти</button>
            </form>
         </Popap>
      </div >
   )
}
export default Header;