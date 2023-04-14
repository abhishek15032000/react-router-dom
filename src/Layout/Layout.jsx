

import React from 'react'
import {NavLink,Outlet} from 'react-router-dom';
function Layout() {
  return (
    <div className='root-layout'>
          <header>
               <nav>
                   <h1>Job router</h1>
                   <NavLink to="/">Home</NavLink>
                   <NavLink to="about">About</NavLink>
                   <NavLink to="help">Help</NavLink>
                   <NavLink to="carrers">Carrers</NavLink>
               </nav>
          </header>
          <main>
            <Outlet/>
          </main>
    </div>
  )
}

export default Layout