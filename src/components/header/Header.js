import logo from '../../assets/images/shoes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import NavBar from './NavBar';
import LoginNavBar from './LoginNavBar';
import ShoppingCartButton from './ShoppingCartButton';

function Header() {
  return(
    <header className="shadow-md py-1 md:py-2">
      <div className='container px-4 mx-auto md:flex md:items-center'>

        <div className='flex justify-between item-center'>
          <a href="index.html" className="flex items-center flex-shrink-0">
            <img src={logo} className="border rounded-full object-contain h-12 md:h-16" alt="logo" />
            <span className="font-semibold text-xl tracking-tight mx-2">Calzate</span>
          </a>
          <div className='flex justify-between my-auto w-20 md:hidden'>
            <ShoppingCartButton />
            <button className='h-8 w-8 border border-solid border-calzate-300 rounded text-calzate-200 opacity-75 hover:opacity-100' id="navbar-toggle">
              <FontAwesomeIcon icon={ faBars } />
            </button>
          </div>
        </div>

        <NavBar />
        <LoginNavBar />

      </div>
    </header>
  );
}

export default Header;