import React from 'react'
import "./navbar.css"
import {Link} from "react-router-dom";
export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='icon'>
        VegShop
      </div>
      <ul className='navbar-menu'>
        <li><Link to="./Home">home</Link></li>
        <li><Link to="./menu">menu</Link></li>
        <li>contact us</li>
      </ul>
      <div className='navbar-right'>
        <div>search</div>
        <div>login</div>
      </div>
    </div>
  )
}