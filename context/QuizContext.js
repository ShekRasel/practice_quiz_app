'use client'
import React, { createContext, useContext, useState } from "react";
const QuizContext = createContext();
export const useQuiz = ()=> useContext(QuizContext);

const QuizProvider = ({ children }) => {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(null);
  const [wrong, setWrong] = useState(false);
  const [btnDisable, setBtnDisable] = useState(true);
  const [count, setCount] = useState(30);
  const [startQuiz, setStartQuiz] = useState(false);
  const [timer, setTimer] = useState(null);
  return (
    <QuizContext.Provider
      value={{
        questionIndex,
        setQuestionIndex,
        score,
        setScore,
        checked,
        setChecked,
        wrong,
        setWrong,
        btnDisable,
        setBtnDisable,
        count,
        setCount,
        setStartQuiz,
        startQuiz,
        timer,
        setTimer
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
