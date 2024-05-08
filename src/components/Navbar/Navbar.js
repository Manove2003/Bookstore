import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiMenu } from "react-icons/fi";
import { FiX } from "react-icons/fi";
import "./Navbar.css"

const Navbar = () => {
    const [isMobile, setIsMobile]=useState(false);
  return (
    <div>
        <nav className='navbar'>
            <div className='logoandimg'>
             <h3 className='logo'>MK <span>Bookstore</span></h3>
            </div>
            <ul className={isMobile?"nav-links-mobile":"nav-links"}
             onClick={()=>setIsMobile(false)}>
               <Link to="/" className='home'>
                   <li>Home</li>
               </Link>
               <Link to="/viewBook" className='viewBook'>
                   <li>Books</li>
               </Link>
               <Link to="/addBook" className='addBook'>
                   <li>Add Books</li>
               </Link>
            </ul>
            <button className='mobile-menu-icon'
             onClick={()=>setIsMobile(!isMobile)}>
                {isMobile ? <FiX/> :<FiMenu/>}
            </button>
        </nav>
    </div>
  )
}

export default Navbar
