import { NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
  const cat = [ 'todos', 'hombre', 'mujer'/* TODO: , 'marcas'*/ ]
  
  return (
    <>
        <nav className={`${props.mobileOpen} md:flex md:ml-auto mt-6 md:mt-0`} id='navbar-collapse'>
          <ul className="flex flex-col md:flex-row md:justify-between">
            
            {cat.map( (c, index) => <li key={index} className='mx-2'><NavLink onClick={props.toggleSelf} exact="true" to={`/category/${c}`} className={({isActive}) =>  "block md:inline rounded md:rounded-none mx-2 px-2 py-1 hover:bg-calzate-700 md:hover:bg-white border-calzate-400 capitalize text-calzate-100 " + (isActive ? 'font-medium md:border-b-4' : 'md:border-b transition-all hover:md:border-b-4')}>{c}</NavLink></li>)}

            <li className='mx-2'><Link onClick={props.toggleSelf} exact="true" to={`/`} className="block rounded hover:bg-calzate-800 md:hidden text-center text-calzate-100 mx-2 px-2 py-1 transition-all">Ingresar</Link></li>
            <li className='mx-2'><Link onClick={props.toggleSelf} exact="true" to={`/`} className="block rounded hover:bg-calzate-600 md:hidden text-center border border-calzate-600 text-calzate-100 mx-2 px-2 py-1 transition-all">Registrarse</Link></li>
          </ul>
        </nav>
    </>
  );
}

export default NavBar;
