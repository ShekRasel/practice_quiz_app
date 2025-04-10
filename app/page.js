"use client";
import Option from "@/components/Option";
import Question from "@/components/Question";
import Result from "@/components/Result";
import { Button } from "@/components/ui/button";
import { questionsData } from "@/data/question";
import { useState } from "react";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [checked, setChecked] = useState(null);
  const [tracking, setTracking] = useState(1);
  const [state, setState] = useState(false);
  const totalQuestion = questionsData.length;

  const handleNextQuestion = () => {
    if (tracking === totalQuestion) {
      setState(true);
    } else {
      setQuestionIndex((prev) => prev + 1);
      setChecked(null);
      const answer = questionsData[questionIndex].ans;
      if (selectedOption === answer) {
        setScore((prev) => prev + 1);
      }
      setTracking((prev) => prev + 1);
    }
  };

  return (
    <div className="w-full h-screen bg-gray-300 flex justify-center items-center">
      <div className="min-h-96 min-w-96 bg-white rounded-md p-2">
        <h1 className="text-center text-2xl font-bold text-purple-700">
          Quiz App
        </h1>

        {state ? (
          <Result score={score} />
        ) : (
          <>
            <div className="flex justify-between mt-2 mb-2 px-4 py-2 bg-gray-50">
              <h1 className="font-bold">Your score is : {score}</h1>
              <h1 className="font-bold">
                {tracking}/{totalQuestion}
              </h1>
            </div>

            <Question
              questionsData={questionsData}
              questionIndex={questionIndex}
            />

            <Option
              questionsData={questionsData}
              questionIndex={questionIndex}
              setSelectedOption={setSelectedOption}
              setChecked={setChecked}
              checked={checked}
            />

            <div className="flex justify-center items-center mt-5">
              <Button
                onClick={handleNextQuestion}
                className="disabled"
                disabled={!checked && true}
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
