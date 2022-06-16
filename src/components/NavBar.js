import logo from '../assets/images/shoes.png';

function NavBar() {
  return (
    <header className="flex max-h-16 justify-between items-center px-4 py-10 shadow-md">
      <div>
        <a href="index.html" className="flex items-center flex-shrink-0">
          <img src={logo} className="border rounded-full object-contain h-16" alt="logo" />
          <span className="font-semibold text-xl tracking-tight mx-2">Calzate</span>
        </a>
      </div>
      <nav>
        <ul className="flex justify-between">
          <li><a href="index.html" className="border-b border-calzate-bg-primary text-calzate-clr-secondary mx-2 px-2 py-1 transition-all hover:border-b-4 hover:font-medium">Inicio</a></li>
          <li><a href="#" className="border-b border-calzate-bg-primary text-calzate-clr-secondary mx-2 px-2 py-1 transition-all hover:border-b-4 hover:font-medium">Hombre</a></li>
          <li><a href="#" className="border-b border-calzate-bg-primary text-calzate-clr-secondary mx-2 px-2 py-1 transition-all hover:border-b-4 hover:font-medium">Mujer</a></li>
          <li><a href="#" className="border-b border-calzate-bg-primary text-calzate-clr-secondary mx-2 px-2 py-1 transition-all hover:border-b-4 hover:font-medium">Marcas</a></li>
        </ul>
      </nav>
      <div>
        <a href="#" className='bg-calzate-bg-primary text-calzate-clr-primary rounded-2xl mx-4 px-3 py-2 align-middle transition-all hover:bg-calzate-bg-secondary hover:shadow-md'>Cuenta</a>
      </div>
    </header>
  );
}

export default NavBar;
