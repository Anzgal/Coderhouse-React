import React, { useState } from "react";
import InputForm from "./InputForm";

export default function BuyForm(props) {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  console.log(userData);

  function onInputChange(evt) {
    const inputName = evt.target.name;
    const value = evt.target.value;

    const newUserData = { ...userData };
    newUserData[inputName] = value;
    setUserData(newUserData);
  }

  function onSubmit(evt) {
    evt.preventDefault();
    props.onSubmit(userData);
  }

  {
    /* <form onSubmit={onSubmit}>
      <InputForm
        required="true"
        title="Nombre"
        name="name"
        value={userData.name}
        onInputChange={onInputChange}
      />
      <InputForm
        required="true"
        title="Email"
        name="email"
        value={userData.email}
        onInputChange={onInputChange}
      />
      <InputForm
        required="true"
        title="Teléfono"
        name="phone"
        value={userData.phone}
        onInputChange={onInputChange}
      />
    <h1>{props.totalPrice}</h1>
      <button onClick={onSubmit}>Crear orden</button>
    </form> */
  }

  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Resumen de pedido
      </h2>

      <dl className="mt-6 space-y-4">
        <div className="flex items-center justify-between">
          <InputForm
            required="true"
            title="Nombre"
            name="name"
            value={userData.name}
            onInputChange={onInputChange}
          />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <InputForm
            required="true"
            title="Email"
            name="email"
            value={userData.email}
            onInputChange={onInputChange}
          />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <InputForm
            required="true"
            title="Teléfono"
            name="phone"
            value={userData.phone}
            onInputChange={onInputChange}
          />
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <dt className="text-base font-medium text-gray-900">Total a pagar</dt>
          <dd className="text-base font-medium text-gray-900">
            ${props.totalPrice}
          </dd>
        </div>
      </dl>

      <div className="mt-6">
        <button
          onClick={onSubmit}
          className="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
        >
          Crear orden
        </button>
      </div>
    </section>
  );
}
