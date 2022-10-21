import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
export default function Sidebar() {
  return (
      <>
      <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/business">Business</Link></li>
            <li><Link to="/entertainment">Entertainment</Link></li>
            <li><Link to="/health">Health</Link></li>
            <li><Link to="/science">Science</Link></li>
            <li><Link to="/sports">Sports</Link></li>
            <li><Link to="/technology">Technology</Link></li>
        </ul>
      </nav>
      </>
  )
}