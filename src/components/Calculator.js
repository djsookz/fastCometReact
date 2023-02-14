import React from "react";
import "./Calculator.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useState } from "react";

const Calculator = () => {
  const [data, setData] = useState({
    input1: "",
    input2: "",
  });

  const [value, setValue] = useState(Number);

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
    if (input1 === "" || input2 === "") {
      alert("Please fill both inputs");
      return setValue(0);
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
    <div style={{ marginTop: "50px" }} className="calculator">
      <div className="calculator_wrapper">
        <h2>Clients Calculator</h2>
        <div className="input_wrapper">
          <input
            type="number"
            name="input1"
            onChange={getData}
            placeholder="New Clients"
          />
          <input
            type="number"
            name="input2"
            onChange={getData}
            placeholder="Old Clients"
          />
        </div>
        <button className="btnSubmit" onClick={results}>
          sumbit
        </button>
        <div className="Circle">
          <CircularProgressbar
            value={value}
            strokeWidth={5}
            text={`Percent Capacity - ${value}%`}
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
