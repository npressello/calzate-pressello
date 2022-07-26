

const CheckOut = () => {

  return (
    <>
      <h1>Completa tus datos y finaliza la compra</h1>
      <form className="flex flex-col">
        <label className="border-red-500 border">Nombre:
          <input className="border-red-500 border" type={"text"} />
        </label>
        <label>Apellido:
          <input type={"text"} />
        </label>
        <label>Telefono:
          <input type={"text"} />
        </label>
        <label>Correo Electronico:
          <input type={"email"} />
        </label>
        <input type="submit" value="Finalizar" />
      </form>
    </>
  );
}

export default CheckOut;