import { useState } from "react";

const CheckOut = ({ handleCheckOut }) => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  return (
    <div className="container flex flex-col items-center">
      <h1 className="my-10 underline italic">Completa tus datos y finaliza la compra</h1>
      <form onSubmit={(e) => handleCheckOut(e, [name, surname, phone, email])} className="flex flex-col items-start font-roboto grow-1">
        <label className="my-2">Nombre:
          <input onChange={(event) => setName(event.target.value)} className="h-8 ml-2 border-calzate-500 border rounded hover:outline-0 focus:outline-0 focus:shadow-md focus:border-2" type={"text"} name="name" />
        </label>
        <label className="my-2">Apellido:
          <input onChange={(event) => setSurname(event.target.value)} className="h-8 ml-2 border-calzate-500 border rounded hover:outline-0 focus:outline-0 focus:shadow-md focus:border-2" type={"text"} name="surname" />
        </label>
        <label className="my-2">Telefono:
          <input onChange={(event) => setPhone(event.target.value)} className="h-8 ml-2 border-calzate-500 border rounded hover:outline-0 focus:outline-0 focus:shadow-md focus:border-2" type={"text"} name="phone" />
        </label>
        <label className="my-2">Correo Electronico:
          <input onChange={(event) => setEmail(event.target.value)} className="h-8 ml-2 border-calzate-500 border rounded hover:outline-0 focus:outline-0 focus:shadow-md focus:border-2" type={"email"} name="email" />
        </label>
        <input className="mx-auto my-2 cursor-pointer text-lg font-semibold bg-calzate-400 text-calzate-900 p-2 rounded hover:bg-calzate-300 hover:shadow-lg" type="submit" value="Finalizar" />
      </form>
    </div>
  );
}

export default CheckOut;