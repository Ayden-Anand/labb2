"use client";  

import React, { useState } from "react";

const UseStateHook = () => {
  const [color, setColor] = useState(" ");

  return (
    <div className={`bg-${color}-800 flex space-x-4 w-full h-screen`}>
      {color === " " && (
        <>
          <button
            className="border bg-red-800 py-[30px] px-[40px]"
            onClick={() => setColor("red")}
          >
            Red
          </button>
          <button
            className="border bg-blue-800 py-[30px] px-[40px]"
            onClick={() => setColor("blue")}
          >
            Blue
          </button>
          <button
            className="border bg-green-800 py-[30px] px-[40px]"
            onClick={() => setColor("green")}
          >
            Green
          </button>
        </>
      )}
      <button
        className="border text-black bg-white px-[40px] py-[30px] "
        onClick={() => setColor(" ")}
      >
        Return
      </button>
      {color !== " " && (
        <button
          className={`border py-[30px] px-[40px] text-white bg-${color}`}
          onClick={() => setColor(color)}
        >
        </button>
      )}
    </div>
  );
};

export default UseStateHook;