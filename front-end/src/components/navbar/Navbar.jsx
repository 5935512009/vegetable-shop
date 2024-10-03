import React, { useState } from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";
export default function Navbar() {
  const [menu,setMenu] = useState("home")
  return (
    <div className='navbar'>
      <div onClick={()=>{setMenu("home")}} className='icon'>
       VegShop
      </div>
      <ul className='navbar-menu'>
        <li onClick={()=>{setMenu("home")}} className={menu==="home"?"active":""}><Link to="./Home">Home</Link></li>
        <li onClick={()=>{setMenu("menu")}} className={menu ==="menu"?"active":""}><Link to="./menu">Menu</Link></li>
        <li onClick={()=>{setMenu("about")}} className={menu === "about"?"active":""}><Link to='./About'>About</Link></li>
      </ul>
      <div className='navbar-right'>
        <div>search</div>
        <div>login</div>
      </div>
    </div>
  )
}