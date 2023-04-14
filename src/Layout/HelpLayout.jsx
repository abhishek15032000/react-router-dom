import React from 'react'
import {Outlet,NavLink} from 'react-router-dom';
function HelpLayout() {
  return (
    <div>
         <p>Help is here</p>
         <header>
            <nav>
                <NavLink to="faq">Faq</NavLink>
                <NavLink to="contact">Contact</NavLink>
            </nav>
         </header>
         <div>
             <Outlet />
         </div>
    </div>
  )
}

export default HelpLayout