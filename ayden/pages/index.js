import { useState } from "react";

export default function Home() {
  const [click, setClick] = useState("bombastic");

  let string = "bomb begin";
  let number = 0;
  let boolean = true;

  return (
    <div className="flex justify-center items-center bg-blue-50 min-h-screen ">
      <div className="flex items-center flex-col w-[450px] h-[500px] bg-green-200 border-green-500 border-[3px] rounded-xl">
      <button className="bg-red-500 mt-[180px] w-[240px] h-[80px] mb-[30px] text-2xl rounded-xl " onClick={() => setClick(" ")}>
        touch me
      </button>
      <p className="text-3xl text-black">{click}</p>
      </div>
    </div>
  );
}