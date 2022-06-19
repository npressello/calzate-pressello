import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function NavBar() {
  return (
    <>
        <nav className='hidden md:flex md:ml-auto mt-6 md:mt-0' id='navbar-collapse'> {/*colocar hidden en lugar de flex al terminar de testear*/}
          <ul className="flex flex-col md:flex-row md:justify-between">
            <li className='mx-2'><a href="#" className="block md:inline bg-calzate-400 md:bg-white rounded md:rounded-none md:border-b-4 border-calzate-400 text-calzate-900 md:text-calzate-100 mx-2 px-2 py-1 font-medium">Inicio</a></li>
            <li className='mx-2'><a href="#" className="block md:inline rounded md:rounded-none hover:bg-calzate-700 md:hover:bg-white md:border-b border-calzate-400 text-calzate-100 mx-2 px-2 py-1 transition-all hover:md:border-b-4">Hombre</a></li>
            <li className='mx-2'><a href="#" className="block md:inline rounded md:rounded-none hover:bg-calzate-700 md:hover:bg-white md:border-b border-calzate-400 text-calzate-100 mx-2 px-2 py-1 transition-all hover:md:border-b-4">Mujer</a></li>
            <li className='mx-2'><a href="#" className="block md:inline rounded md:rounded-none hover:bg-calzate-700 md:hover:bg-white md:border-b border-calzate-400 text-calzate-100 mx-2 px-2 py-1 transition-all hover:md:border-b-4">Marcas</a></li>
            <li className='mx-2'><a href="#" className="block rounded hover:bg-calzate-800 md:hidden text-center text-calzate-100 mx-2 px-2 py-1 transition-all">Ingresar</a></li>
            <li className='mx-2'><a href="#" className="block rounded hover:bg-calzate-600 md:hidden text-center border border-calzate-600 text-calzate-100 mx-2 px-2 py-1 transition-all">Registrarse</a></li>
          </ul>
        </nav>
    </>
  );
}

export default NavBar;
