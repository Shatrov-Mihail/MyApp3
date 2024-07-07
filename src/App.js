import styles from "./App.module.css";
import React, { useState } from "react";

const NUMS = ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"];

export const App = () => {
  const [operand1, setOperand1] = useState("");
  const [operator, setOperator] = useState("");
  const [operand2, setOperand2] = useState("");
  const [result, setResult] = useState(false);

  const handleNumberClick = (num) => {
    if (operator) {
      setOperand2(operand2 + num);
    } else {
      setOperand1(operand1 + num);
    }
    setResult(false);
  };

  const handleOperatorClick = (op) => {
    if (operand1) {
      setOperator(op);
    }
  };

  const handleClear = () => {
    setOperand1("");
    setOperator("");
    setOperand2("");
    setResult(false);
  };

  const handleEquals = () => {
    let res;
    switch (operator) {
      case "+":
        res = parseInt(operand1) + parseInt(operand2);
        break;
      case "-":
        res = parseInt(operand1) - parseInt(operand2);
        break;
      default:
        return;
    }
    setOperand1(res.toString());
    setOperator("");
    setOperand2("");
    setResult(true);
  };

  return (
    <>
      <div className={styles.calculator}>
        <div className={styles.calculatorInput}>
          <input
            className={`${styles.input} ${result ? styles.result : ""}`}
            type="text"
            value={operand1 + operator + operand2}
            readOnly
          />
        </div>
        <div className={styles.containerNumbers}>
          <div className={styles.buttons}>
            {NUMS.map((num) => (
              <button
                className={styles.button}
                key={num}
                onClick={() => handleNumberClick(num)}
              >
                {num}
              </button>
            ))}
            <button
              className={styles.button}
              onClick={() => handleOperatorClick("+")}
            >
              +
            </button>
            <button
              className={styles.button}
              onClick={() => handleOperatorClick("-")}
            >
              -
            </button>
            <button className={styles.buttonEqually} onClick={handleEquals}>
              =
            </button>
            <button className={styles.buttonClear} onClick={handleClear}>
              C
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
