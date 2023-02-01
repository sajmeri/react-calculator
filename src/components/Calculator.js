import { useState } from "react";

import Wrapper from "./Wrapper";
import Screen from "./Screen";
import ButtonBox from "./ButtonBox";
import Button from "./Button";

import {
  handleResetClick,
  handleInvertClick,
  handlePercentClick,
  hanldeEqualsClick,
  handleSignClick,
  handleCommaClick,
  handleNumberClick,
} from "../helpers/calculatorHelpers";

const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

const Calculator = () => {
  const [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const calculate = (e, btn) => {
    switch (btn) {
      case "C":
        return handleResetClick(calc);
      case "+-":
        return handleInvertClick(calc);
      case "%":
        return handlePercentClick(calc);
      case "=":
        return hanldeEqualsClick(calc);
      case "/":
      case "X":
      case "-":
      case "+":
        return handleSignClick(e, calc);
      case ".":
        return handleCommaClick(e, calc);
      default:
        return handleNumberClick(e, calc);
    }
  };
  const handleButtonClick = (e, btn) => {
    const newState = calculate(e, btn);
    setCalc(newState);
  };

  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num : calc.res} />
      <ButtonBox>
        {btnValues.flat().map((btn, i) => {
          return (
            <Button
              key={i}
              className={btn === "=" ? "equals" : ""}
              value={btn}
              onClick={(e) => handleButtonClick(e, btn)}
            />
          );
        })}
      </ButtonBox>
    </Wrapper>
  );
};
export default Calculator;
