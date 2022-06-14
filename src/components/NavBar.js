import logo from '../assets/images/shoes.png';

function NavBar() {
  return (
    <header className="flex max-h-16 justify-between items-center">
      <div className="flex items-center flex-shrink-0">
        <img src={logo} className="object-contain h-16" alt="logo" />
        <span className="font-semibold text-xl tracking-tight">Calzate</span>
      </div>
      <nav>
        <ul className="flex justify-between">
          <li><a href="#" className="border border-rose-600">Inicio</a></li>
          <li><a href="#" className="border border-rose-600">Hombre</a></li>
          <li><a href="#" className="border border-rose-600">Mujer</a></li>
          <li><a href="#" className="border border-rose-600">Marcas</a></li>
        </ul>
      </nav>
      <div>
        <a href="#">Cuenta</a>
      </div>
    </header>
  );
}

export default NavBar;
