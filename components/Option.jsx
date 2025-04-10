import React, { useState } from "react";

const Option = ({
  questionsData,
  questionIndex,
  setSelectedOption,
  setChecked,
  checked,
}) => {
  const hanldeChange = (e) => {
    const { name, id } = e.target;
    setChecked(id);
    setSelectedOption(name);
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
              checked={checked == index && true}
              onChange={hanldeChange}
            />
            <label htmlFor={index}>{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Option;
