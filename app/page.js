"use client";
import Option from "@/components/Option";
import Question from "@/components/Question";
import Result from "@/components/Result";
import Time from "@/components/Time";
import Time2 from "@/components/Time2";
import { Button } from "@/components/ui/button";
import { questionsData } from "@/data/question";
import { useState } from "react";

export default function Home() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(null);
  const [wrong, setWrong] = useState(false);
  const [timer, setTimer] = useState(null);
  const [state ,setState] = useState(true);
  const [btnDisable,setBtnDisable] = useState(true)

  const handleNextQuestion = () => {
    setQuestionIndex((prev) => prev + 1);
    setChecked(null);
    setWrong(false);
    clearInterval(timer);
    setState(!state);
    setBtnDisable(!btnDisable);
  };

  console.log("Home");

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
              
                <h1 className="font-bold">Your score : <span className="text-green-600">{score}</span></h1>

                {/* <Time timer={timer} setTimer={setTimer} state={state}  setChecked={setChecked} checked = {checked} questionsData={questionsData} questionIndex={questionIndex} setBtnDisable={setBtnDisable}/> */}

                <Time2/>
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
