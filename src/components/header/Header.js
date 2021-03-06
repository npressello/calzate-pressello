import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import LoginNavBar from './LoginNavBar';
import CartWidget from './CartWidget';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ itemOnCart }) => {
  const [isOpen, setIsOpen] = useState("hidden");

  const toggleMobileNavbar = () => {
    setIsOpen((prevValue) => {
      if (prevValue === "hidden") return "block";
      else return "hidden";
    });
  }

  const closeMobileNavbar = () => setIsOpen("hidden");

  return (
    <header className="shadow-md py-1 md:py-2 bg-white">
      <div className='container px-4 mx-auto md:flex md:items-center'>

        <div className='flex justify-between item-center'>
          <Link exact='true' to={'/'} className="flex items-center flex-shrink-0">
            <img src={"https://scorpprojects.s3.sa-east-1.amazonaws.com/products/images/shoes.png"} className="border rounded-full object-contain h-12 w-12 md:h-16 md:w-16" alt="logo" />
            <span className="font-semibold text-xl tracking-tight mx-2">Calzate</span>
          </Link>
          <div className='flex justify-between my-auto w-20 md:hidden'>
            <Link exact='true' to={'/cart'}><CartWidget itemsInCart={itemOnCart} /></Link>
            <button onClick={toggleMobileNavbar} className='h-8 w-8 border border-solid border-calzate-300 rounded text-calzate-200 opacity-75 hover:opacity-100' id="navbar-toggle" aria-label='menu'>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        <NavBar mobileOpen={isOpen} toggleSelf={closeMobileNavbar} />
        <LoginNavBar itemsInCart={itemOnCart} />

      </div>
    </header>
  );
}

export default Header;