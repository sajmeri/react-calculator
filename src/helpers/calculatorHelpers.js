export const math = (a, b, sign) => {
  switch (sign) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "X":
      return a * b;
    default:
      return a / b;
  }
};

export const handleNumberClick = (e, calc) => {
  e.preventDefault();
  const value = e.target.innerHTML;
  let num;

  if (calc.num === 0 && value === "0") {
    num = 0;
  } else if (calc.num % 1 === 0) {
    num = Number(calc.num + value);
  } else {
    num = calc.num + value;
  }

  // if (calc.num.length < 16) {

  return {
    ...calc,
    num: num,
    res: !calc.sign ? 0 : calc.res,
  };
  // }
};

export const handleCommaClick = (e, calc) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  return {
    ...calc,
    num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
  };
};

export const handleSignClick = (e, calc) => {
  e.preventDefault();
  const value = e.target.innerHTML;

  return {
    ...calc,
    sign: value,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: 0,
  };
};

export const hanldeEqualsClick = (calc) => {
  if (calc.sign && calc.num) {
    let response =
      calc.num === "0" && calc.sign === "/"
        ? "Can't divide with 0"
        : math(Number(calc.res), Number(calc.num), calc.sign);

    return {
      ...calc,
      res: response,
      sign: "",
      num: 0,
    };
  }
};

export const handleInvertClick = (calc) => {
  return {
    ...calc,
    num: calc.num ? calc.num * -1 : 0,
    res: calc.res ? calc.res * -1 : 0,
    sign: "",
  };
};

export const handlePercentClick = (calc) => {
  let num = calc.num ? parseFloat(calc.num) : 0;
  let res = calc.res ? parseFloat(calc.res) : 0;

  return {
    ...calc,
    num: (num /= Math.pow(100, 1)),
    res: (res /= Math.pow(100, 1)),
    sign: "",
  };
};

export const handleResetClick = (calc) => {
  return {
    ...calc,
    sign: "",
    num: 0,
    res: 0,
  };
};

export const toLocaleString = (num) =>
  String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, "$1 ");

export const removeSpaces = (num) => num.toString().replace(/\s/g, "");
