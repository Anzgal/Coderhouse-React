import React, { useState } from "react";

function ItemCount({ stock, onAddToCart, text }) {
  const [count, setCount] = useState(1);

  function handleAdd(evt) {
    console.log(evt);
    if (count < stock) setCount(count + 1);
  }

  function handleSubstract(evt) {
    console.log(evt);
    if (count > 1) setCount(count - 1);
  }

  return (
    <div className="itemcount_container">
      {/* <div className="itemcount_control">
        <button color="#903024" onClick={handleSubstract}>
          -
        </button>
        <span>{count}</span>
        <button color="#239044" onClick={handleAdd}>
          +
        </button>
      </div> */}
      <div className="flex justify-center w-1/5 mx-auto mt-3">
            <svg onClick={handleSubstract} className="fill-current text-gray-300 w-3" viewBox="0 0 448 512">
                <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
            </svg>

            <input className="mx-2 border text-center w-8 text-gray-900 p-2" type="text" onChange={()=>{}} value={count}/>

            <svg onClick={handleAdd} className="fill-current text-gray-300 w-3" viewBox="0 0 448 512">
                <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path>
            </svg>
        </div>
      <div className="mt-3 bg-green-500 w-max p-2 rounded-md mx-auto">
        <button type="alert" onClick={() => onAddToCart(count)}>
          {text}
        </button>
      </div>
    </div>

    



  );
}

export default ItemCount;
