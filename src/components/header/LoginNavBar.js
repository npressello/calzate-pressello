import CartWidget from './CartWidget';

const LoginNavBar = () => {
  const toggleLoginPopup = () => {
    document.getElementById("login-popup-div").classList.toggle("hidden");
  }

  return (
    <>
        <div className='relative hidden ml-auto md:flex'>
          <CartWidget />
          <a id='toggle-login-popup' onClick={toggleLoginPopup} href="#" className='bg-calzate-400 text-calzate-900 rounded-3xl mx-4 px-3 py-2 align-middle transition-all hover:bg-calzate-300 hover:shadow-md'>Cuenta</a>
          <div id='login-popup-div' className='hidden absolute rounded border border-calzate-700 p-2 top-16 right-0 bg-white flex flex-col shadow-md'>
            <label htmlFor="inputEmail">Correo electrónico:</label>
            <input className="rounded border border-calzate-400 focus:outline-calzate-300 focus:shadow-md mb-2" type="email" name="email" id="inputEmail" />
            <label htmlFor="inputPassword">Contraseña:</label>
            <input className="rounded border border-calzate-400 focus:outline-calzate-300 focus:shadow-md mb-2" type="password" name="password" id="inputPassword" />
            <div className='flex my-2'>
              <button id='btn-login-large' className="p-1 mx-auto rounded hover:bg-calzate-400 border-2 border-calzate-400 text-calzate-100 hover:text-calzate-800 hover:font-semibold">Ingresar</button>
              <button id='btn-signup-large' className="p-1 mx-auto rounded bg-calzate-400 hover:bg-calzate-700 border border-calzate-400 hover:border-calzate-700 text-calzate-800 hover:text-calzate-100 font-semibold">Registrarse</button>
            </div>            
          </div>
        </div>
    </>
  );
}

export default LoginNavBar;
