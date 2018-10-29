import React, { useState } from "react";
import ReactDOM from "react-dom";
import { chars, weights, shots } from "./config";
import { Radio } from "./components/radio";
import { PercentageInput } from "./components/percentage-input";
import { Amount } from "./components/amount";
import { getCharWeight } from "./helpers";

import "./styles.css";

const App = () => {
  const [percentage, setPercentage] = useState("45");
  const [char, setChar] = useState("bd");
  const [weight, setWeight] = useState(49.99);
  const [shot, setShot] = useState(2);
  const [decreaseWeight, setDecreaseWeight] = useState(false);

  return (
    <div className="App">
      <h1>L2 Space Manager</h1>
      <p>Current percentage:</p>

      <PercentageInput value={percentage} onChange={setPercentage} />

      <br />
      <br />

      <label>
        <input
          value={decreaseWeight}
          type="checkbox"
          onChange={() => setDecreaseWeight(!decreaseWeight)}
        />
        Decrease Weight 3lvl
      </label>

      <hr />
      <p>Select char:</p>
      <Radio items={chars} value={char} onChange={setChar} />

      <p>Select weight:</p>
      <Radio
        items={weights}
        value={weight}
        onChange={value => setWeight(Number(value))}
      />

      <p>Select shots:</p>
      <Radio
        items={shots}
        value={shot}
        onChange={value => setShot(Number(value))}
      />

      <hr />
      <Amount
        percentage={Number(percentage)}
        charWeight={getCharWeight(char)}
        weightLimit={weight}
        shotWeight={shot}
        decreaseWeight={decreaseWeight}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
