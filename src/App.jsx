import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const myName = "Yura";
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD9mwulujAhwKfs0vZA5NgzkTmcJYNZYzkIQ&s";
  const imageDesciription = "car";

  const a = 10
  const b = 5

  const googleObj = {
    name: "Google",
    url: "https://www.google.com",
  };

  function calculate(a, b) {
    return a + b;
  }

  const colors = ["red", "blue", "green"];

  return (
    <>
      <div>
        <h1>{myName}</h1>
        <p>Ласкаво просимо до нашого сайту</p>
        <img src={imageUrl} alt={imageDesciription} />
      </div>

      <div>
        <a href={googleObj.url}>Google</a>
      </div>

      <div>
        <p>{calculate(a, b)}</p>
      </div>

      <div>
        {colors.map((color, index) => (
          <ul key={index}>
            <li>{color}</li>
          </ul>
        ))}
      </div>
    </>
  );
}
export default App;
