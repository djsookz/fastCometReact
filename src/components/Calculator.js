import React from "react";
import "./Calculator.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState({
    input1: 0,
    input2: 0,
  });

  const [value, setValue] = useState(0);

  const [isNumber, setIsNumber] = useState(false);

  const getData = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const input1 = data.input1;
  const input2 = data.input2;

  const result = (input1 / input2) * 100;

  const results = () => {
    setIsNumber(false);

    if (input1 === "" || input2 === "") {
      alert("Please fill both inputs");

      return setValue(0);
    }

    if (isNaN(result)) {
      setIsNumber(true);
    }

    if (result === Infinity) {
      alert("Result is infinity");

      return setValue(0);
    }

    if (result > 100 && result < 999999999) {
      alert(`Result is more than 100% To be exact is ${Math.round(result)}%`);

      return setValue(0);
    }

    setValue(Math.round(result));
  };

  return (
    <div className="calculator">
      <div className="calculator_wrapper">
        <h2>Clients Calculator</h2>
        <div className="input_wrapper">
          <input
            type="text"
            name="input1"
            onChange={getData}
            placeholder="New Clients"
          />
          <input
            type="text"
            name="input2"
            onChange={getData}
            placeholder="Old Clients"
          />
        </div>
        {isNumber === true ? (
          <span className="isNaN">Please type numbers</span>
        ) : (
          <span></span>
        )}
        <button className="btnSubmit" onClick={results}>
          Sumbit
        </button>
        <div className="Circle">
          <CircularProgressbar
            value={value}
            strokeWidth={5}
            text={
              isNaN(result)
                ? `Percent Capacity - 0%`
                : `Percent Capacity - ${value}%`
            }
            styles={buildStyles({
              textSize: "4px",
              textColor: "black",
              pathTransitionDuration: "1",
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
