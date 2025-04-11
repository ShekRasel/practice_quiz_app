"use client";
import Option from "@/components/Option";
import Question from "@/components/Question";
import Result from "@/components/Result";
import Time from "@/components/Time";
import { Button } from "@/components/ui/button";
import { questionsData } from "@/data/question";
import { useEffect, useState } from "react";

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(null);
  const [wrong, setWrong] = useState(false);
  const [timer, setTimer] = useState(null);
  const [state, setState] = useState(true);
  const [btnDisable, setBtnDisable] = useState(true);

  const [count, setCount] = useState(30);

  useEffect(() => {
    if (count > 0) {
      setCount(30);
    }
    const intervalId = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    setTimer(intervalId);
  }, [state]);

  useEffect(() => {
    if (count < 1) {
      clearInterval(timer);
      if (questionIndex !== questionsData.length) {
        const answer = questionsData[questionIndex].ans;
        const options = questionsData[questionIndex].options;
        const index = options.indexOf(answer);
        setChecked(index);
      }

      setBtnDisable(false);
      setCount(0);
    }
  }, [count]);

  const handleNextQuestion = () => {
    setQuestionIndex((prev) => prev + 1);
    setChecked(null);
    setWrong(false);
    clearInterval(timer);
    setState(!state);
    setBtnDisable(!btnDisable);
  };

  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
      <div className="min-h-96 min-w-96 bg-white rounded-md p-2">
        <h1 className="text-center text-2xl font-bold text-purple-700">
          Quiz App
        </h1>

        {questionIndex === questionsData.length ? (
          <Result score={score} />
        ) : (
          <>
            <div className="flex justify-between mt-2 mb-2 px-4 py-2 bg-gray-50">
              <h1 className="font-bold">
                Your score : <span className="text-green-600">{score}</span>
              </h1>

              {/* <Time timer={timer} setTimer={setTimer} state={state}  setChecked={setChecked} checked = {checked} questionsData={questionsData} questionIndex={questionIndex} setBtnDisable={setBtnDisable}/> */}

              <Time count={count} />
              <h1 className="font-bold">
                {questionIndex + 1}/{questionsData.length}
              </h1>
            </div>

            <Question
              questionsData={questionsData}
              questionIndex={questionIndex}
            />

            <Option
              questionsData={questionsData}
              questionIndex={questionIndex}
              setChecked={setChecked}
              checked={checked}
              setWrong={setWrong}
              wrong={wrong}
              setScore={setScore}
              setBtnDisable={setBtnDisable}
            />

            <div className="flex justify-center items-center mt-5">
              <Button
                onClick={handleNextQuestion}
                className="disabled"
                disabled={btnDisable}
              >
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
