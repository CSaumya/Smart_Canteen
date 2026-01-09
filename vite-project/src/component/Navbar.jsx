import React from 'react'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className=" bg-red-400 flex items-center justify-between px-6 py-4 border-b">
<NavLink to='/snacks' className="text-xl font-bold text-white">SmartCanteen</NavLink>

<div className="flex gap-4">
<NavLink
  to="/snacks"
  className={({ isActive } )=>
    isActive ? "font-semibold underline text-white" : "text-white"
  }
>
  Snacks
</NavLink>

<NavLink
  to="/students"
  className={({ isActive }) =>
    isActive ? "font-semibold underline text-white" : "text-white"
  }
>
  Students
</NavLink>

<NavLink
to="/studentform"
className={({ isActive }) =>
isActive ? "font-semibold underline text-white" : "text-white"
}
>
Add Student
</NavLink>

</div>
      
    </nav>
  )
}

export default Navbar
