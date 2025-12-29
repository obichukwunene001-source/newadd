import { Menu, X} from 'lucide-react';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="bg-teal-950 relative top-0 w-full z-50">
        <div className="py-6 max-w-7xl  text-white  md:mt-0 mx-auto px-4 flex justify-between items-center">
            <NavLink to="/" className="pl-6 md:pl-9 " onClick={() => setIsOpen(false)}>Logo</NavLink>
            <nav className="hidden md:flex gap-7  md:pr-9 pr-5">
                <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
                  <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
                <NavLink to="/products" onClick={() => setIsOpen(false)}>Products</NavLink>
                <NavLink to="/about" onClick={() => setIsOpen(false)}>Account</NavLink>
            </nav>
        <button className={`md:hidden ${isOpen ? 'fixed z-50 top-9 right-5': ''}`} onClick={()=> setIsOpen(!isOpen)}>
           {isOpen ? <X  className="w-6 h-6 text-yellow-200 mr-4"/> : <Menu className="w-6 h-6 text-yellow-200 mr-4"/>}
        </button>
        </div>
        <nav className={`md:hidden bg-teal-950 flex z-20 flex-col text-yellow-100 gap-6 fixed h-full w-full pl-8 pt-20
         top-0 transform transition-transform duration-500 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
           <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
             <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
             <NavLink to="/products" onClick={() => setIsOpen(false)}>Products</NavLink>
             <NavLink to="/about" onClick={() => setIsOpen(false)}>Account</NavLink>
               
        </nav>

    </header>
  )
}

export default Navbar;