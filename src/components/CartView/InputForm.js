import React from "react";

function InputForm(props) {
  return (
    <>
      <div className="w-full">
        <label
          htmlFor={props.name}
          className="block text-sm font-medium text-gray-700 text-left"
        >
          {props.title}
        </label>
        <input
          required={true}
          type="text"
          name={props.name}
          value={props.value}
          id={props.name}
          onChange={props.onInputChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm text-gray-800"
        />
      </div>

      {/* <label style={{ width: "100px", marginRight: 4 }}>{props.title}</label>
      <input
        required={true}
        value={props.value}
        name={props.name}
        type="text"
        onChange={props.onInputChange}
      /> */}
    </>
  );
}

export default InputForm;
