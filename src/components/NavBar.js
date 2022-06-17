import logo from '../assets/images/shoes.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <header className="shadow-md py-1 md:py-2">
      <div className='container px-4 mx-auto md:flex md:items-center'>

        <div className='flex justify-between item-center'>
          <a href="index.html" className="flex items-center flex-shrink-0">
            <img src={logo} className="border rounded-full object-contain h-12 md:h-16" alt="logo" />
            <span className="font-semibold text-xl tracking-tight mx-2">Calzate</span>
          </a>
          <button className='h-8 w-8 my-auto border border-solid border-calzate-300 rounded text-calzate-200 opacity-75 hover:opacity-100 md:hidden' id="navbar-toggle">
            <FontAwesomeIcon icon={ faBars } />
          </button>
        </div>

        <nav className='md:flex md:ml-auto mt-6 md:mt-0' id='navbar-collapse'> {/*colocar hidden en lugar de flex al terminar de testear*/}
          <ul className="flex flex-col md:flex-row md:justify-between">
            <li className='mx-2'><a href="#" className="block md:inline bg-calzate-400 md:bg-white rounded md:rounded-none md:border-b-4 border-calzate-400 text-calzate-900 md:text-calzate-100 mx-2 px-2 py-1 font-medium">Inicio</a></li>
            <li className='mx-2'><a href="#" className="block md:inline rounded md:rounded-none hover:bg-calzate-700 md:hover:bg-white md:border-b border-calzate-400 text-calzate-100 mx-2 px-2 py-1 transition-all hover:md:border-b-4">Hombre</a></li>
            <li className='mx-2'><a href="#" className="block md:inline rounded md:rounded-none hover:bg-calzate-700 md:hover:bg-white md:border-b border-calzate-400 text-calzate-100 mx-2 px-2 py-1 transition-all hover:md:border-b-4">Mujer</a></li>
            <li className='mx-2'><a href="#" className="block md:inline rounded md:rounded-none hover:bg-calzate-700 md:hover:bg-white md:border-b border-calzate-400 text-calzate-100 mx-2 px-2 py-1 transition-all hover:md:border-b-4">Marcas</a></li>
            <li className='mx-2'><a href="#" className="block rounded hover:bg-calzate-800 md:hidden text-center text-calzate-100 mx-2 px-2 py-1 transition-all">Ingresar</a></li>
            <li className='mx-2'><a href="#" className="block rounded hover:bg-calzate-600 md:hidden text-center border border-calzate-600 text-calzate-100 mx-2 px-2 py-1 transition-all">Registrarse</a></li>
          </ul>
        </nav>

        <div className='hidden ml-auto md:flex'>
          <a href="#" className='bg-calzate-400 text-calzate-900 rounded-3xl mx-4 px-3 py-2 align-middle transition-all hover:bg-calzate-300 hover:shadow-md'>Cuenta</a>
          <div>
            <input type="email" name="email" id="inputEmail" />
            <input type="password" name="password" id="inputPassword" />
          </div>
        </div>

      </div>
    </header>
  );
}

export default NavBar;
