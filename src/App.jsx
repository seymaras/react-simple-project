import React from "react";
import { useState } from "react";
import "./index.css";

function Input() {
  const [inputYazi, setInputYazi] = useState("");

  const inputYaziYenileme = (event) => {
    setInputYazi(event.target.value);
  };

  const handleButtonClick = () => {
    alert(inputYazi);
  };

  return (
    <div class="orta-div">
      <p>
        Simple <strong>Input</strong> <i>Alert</i>
      </p>
      <input
        type="text"
        value={inputYazi}
        onChange={inputYaziYenileme}
        placeholder="Type something..."
      />

      <button className="Button" onClick={handleButtonClick}>
        Gönder
      </button>
    </div>
  );
}

export default Input;
