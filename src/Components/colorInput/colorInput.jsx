import { useState } from "react";

export default function ColorInput({ id }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }

  return (
    <>
      {
        <input
          type="text"
          id={id}
          name={id}
          value={inputValue}
          onChange={handleInputValue}
        />
      }

      {<input type="color" value={inputValue} onChange={handleInputValue} />}
    </>
  );
}
