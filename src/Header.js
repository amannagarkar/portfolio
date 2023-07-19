import React from 'react'
import './Header.css'


function Header() {
  return (
    <div className="section-nav">
        <ul>
        <li className="active"><a href="#About">About</a></li>
        <li><a href="#Timeline">Timeline</a></li>
        <li><a href="#Contact">Contact</a></li>
        </ul>
    </div>

  )
}

export default Header