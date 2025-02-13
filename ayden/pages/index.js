import React, { useState } from "react";

const UseStateTask = () => {
  const [color, setColor] = useState("");

  return (
    <div className={`flex space-x-4 w-full h-screen bg-${color}-800`}>
      <p>Өнгө сонгох:</p>
      <button
        className="border bg-red-800 py-4 px-6"
        onClick={() => {
          setColor("red");
        }}
      >
        Улаан
      </button>
      {color == "red" ? null : (
        <>
  
          <button
            className="border bg-blue-800 py-4 px-6"
            onClick={() => {
              setColor("blue");
            }}
          >
            Цэнхэр
          </button>
          <button
            className="border bg-green-800 py-4 px-6"
            onClick={() => {
              setColor("green");
            }}
          >
            Ногоон
          </button>
        </>
      )}

      <button
        className="border bg-gray-800 text-white py-4 px-6"
        onClick={() => {
          setColor("");
        }}
      >
        Refresh
      </button>
    </div>
  );
};

export default UseStateTask;
