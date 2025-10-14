
import React, { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput("");
  };

  const handleBackspace = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(input.replace("√", "Math.sqrt").replace("^", "**"));
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const handleFunction = (func) => {
    try {
      let expression = input;
      if (func === "sin") expression = `Math.sin(${expression})`;
      if (func === "cos") expression = `Math.cos(${expression})`;
      if (func === "tan") expression = `Math.tan(${expression})`;
      if (func === "log") expression = `Math.log10(${expression})`;
      if (func === "ln") expression = `Math.log(${expression})`;
      const result = eval(expression);
      setInput(result.toString());
    } catch {
      setInput("Error");
    }
  };

  const buttons = [
    "7", "8", "9", "/", "sin",
    "4", "5", "6", "*", "cos",
    "1", "2", "3", "-", "tan",
    "0", ".", "+", "√", "^",
    "(", ")", "log", "ln"
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-2xl shadow-xl w-96">
        <h1 className="text-white text-2xl text-center mb-4">Scientific Calculator</h1>

        {/* Display */}
        <div className="bg-black text-green-400 font-mono text-right p-4 rounded-lg mb-4 h-16 overflow-x-auto">
          {input || "0"}
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-5 gap-3">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() =>
                ["sin", "cos", "tan", "log", "ln"].includes(btn)
                  ? handleFunction(btn)
                  : handleClick(btn)
              }
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 rounded-lg"
            >
              {btn}
            </button>
          ))}
        </div>

        {/* Control Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            onClick={handleClear}
            className="flex-1 bg-red-600 hover:bg-red-500 text-white font-bold py-2 rounded-lg"
          >
            C
          </button>
          <button
            onClick={handleBackspace}
            className="flex-1 bg-yellow-600 hover:bg-yellow-500 text-white font-bold py-2 rounded-lg"
          >
            ⌫
          </button>
          <button
            onClick={handleCalculate}
            className="flex-1 bg-green-600 hover:bg-green-500 text-white font-bold py-2 rounded-lg"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
}
