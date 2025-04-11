import React, { useState } from "react";

const Option = ({
  questionsData,
  questionIndex,
  setChecked,
  checked,
  setWrong,
  wrong,
  setScore,
  setBtnDisable
}) => {
  const answer = questionsData[questionIndex].ans;
  
  const hanldeChange = (e) => {
    const { name, id } = e.target;
    setChecked(id);
    setBtnDisable(false);

    if (name === answer) {
      setScore((prev) => prev + 1);
    } else {
      setWrong(true);
    }
  };



  return (
    <div>
      <ul>
        {questionsData[questionIndex].options.map((option, index) => (
          <li key={index} className="flex gap-2 font-semibold px-4 mt-2">
            <input
              type="checkbox"
              id={index}
              name={option}
              checked={checked == index}
              onChange={(e) => hanldeChange(e)}
              disabled={checked !== null && checked != index}

            />
            <label
              htmlFor={index}
              className={`${ index == checked && "bg-green-500"} ${
                wrong && index == checked && "bg-red-500"
              } ${wrong && answer == option && "bg-green-500"}`}
            >
              {option}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Option;
