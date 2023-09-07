import React, { Children, useState } from "react";

function Form(props) {
  const initialUserInput = {
    "current-savings": 10000,
    "yearly-contribution": 1200,
    "expected-return": 7,
    duration: 10,
  };
  const [userInput, setUserInput] = useState(initialUserInput);

  function submitHanlder(e) {
    e.preventDefault();
    props.onCalculate(userInput);
  }
  function resetHandler(e) {
    setUserInput(initialUserInput);
  }
  function changeHandler(event) {
    setUserInput((prevInput) => {
      // Spread syntax allows you to deconstruct an array or object into separate variables
      // split the object into separate variables and update the object with the matching ID
      return {
        ...prevInput,
        [event.target.id]: event.target.value,
      };
    });
  }
  return (
    <form className="form" onSubmit={submitHanlder}>
      <div className="input-group">
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={changeHandler}
            // onChange={(e) => changeHandler("current-savings", e.target.value)}
            value={userInput["current-savings"]}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={changeHandler}
            // alternative way to send multiple parameters to method -->
            // onChange={(e) =>changeHandler("yearly-contribution", e.target.value)}
            value={userInput["yearly-contribution"]}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={changeHandler}
            // onChange={(e) => changeHandler("expected-return", e.target.value)}
            value={userInput["expected-return"]}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={changeHandler}
            // onChange={(e) => changeHandler("duration", e.target.value)}
            value={userInput["duration"]}
          />
        </p>
      </div>
      <p className="actions">
        <button type="reset" className="buttonAlt" onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}

export default Form;
