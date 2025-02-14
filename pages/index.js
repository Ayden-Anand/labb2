import { useState } from "react";

export default function Lab3() {
  const [name, setName] = useState("");

  return (
    <div className="flex items-center justify-center h-screen">
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-black border-[1px]"
        />
      </label>
      <p className="ml-[5px]">
        Hi {name === "" ? "suragch" : name}!
      </p>
    </div>
  );
}
