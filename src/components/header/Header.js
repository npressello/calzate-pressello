import logo from '../../assets/images/shoes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import LoginNavBar from './LoginNavBar';
import CartWidget from './CartWidget';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState("hidden");
  const [totalItemsInCart, setTotalItemsInCart] = useState(0);
  
  const toggleMobileNavbar = () => {
    setIsOpen((prevValue) => {
      if (prevValue === "hidden") return "block";
      else return "hidden";
    });
  }

  return(
    <header className="shadow-md py-1 md:py-2 bg-white">
      <div className='container px-4 mx-auto md:flex md:items-center'>

        <div className='flex justify-between item-center'>
          <a href="index.html" className="flex items-center flex-shrink-0">
            <img src={logo} className="border rounded-full object-contain h-12 w-12 md:h-16 md:w-16" alt="logo" />
            <span className="font-semibold text-xl tracking-tight mx-2">Calzate</span>
          </a>
          <div className='flex justify-between my-auto w-20 md:hidden'>
            <CartWidget itemsInCart={totalItemsInCart} />
            <button onClick={toggleMobileNavbar} className='h-8 w-8 border border-solid border-calzate-300 rounded text-calzate-200 opacity-75 hover:opacity-100' id="navbar-toggle" aria-label='menu'>
              <FontAwesomeIcon icon={ faBars } />
            </button>
          </div>
        </div>

        <NavBar mobileOpen={isOpen} />
        <LoginNavBar itemsInCart={totalItemsInCart} />

      </div>
    </header>
  );
}

export default Header;