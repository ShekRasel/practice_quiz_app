"use client";
import Option from "@/components/Option";
import Question from "@/components/Question";
import Result from "@/components/Result";
import Time from "@/components/Time";
import { Button } from "@/components/ui/button";
import { useQuiz } from "@/context/QuizContext";
import { questionsData } from "@/data/question";
import { useEffect, useState } from "react";

export default function Home() {
  const [state, setState] = useState(true);
  const {
    questionIndex,
    count,
    setCount,
    setQuestionIndex,
    setChecked,
    setWrong,
    timer,
    btnDisable,
    setBtnDisable,
    setStartQuiz,
    startQuiz,
    setTimer,
    score,
  } = useQuiz();

  useEffect(() => {
    if (startQuiz) {
      setCount(30);
      if(questionIndex !== questionsData.length ){

        const intervalId = setInterval(() => {
          setCount((prev) => prev - 1);
          
        }, 1000);

        setTimer(intervalId);
      }

    }
  }, [state,startQuiz]);

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
      <div className="min-h-96  min-w-96 bg-white rounded-md p-2">
        <h1 className="text-center text-2xl font-bold text-purple-700">
          Quiz App
        </h1>

        {startQuiz ? (
          <>
            {questionIndex === questionsData.length ? (
              <Result />
            ) : (
              <>
                <div className="flex justify-between mt-2 mb-2 px-4 py-2 bg-gray-50">
                  <h1 className="font-bold">
                    Your score : <span className="text-green-600">{score}</span>
                  </h1>
                  <Time />
                  <h1 className="font-bold">
                    {questionIndex + 1}/{questionsData.length}
                  </h1>
                </div>

                <Question />

                <Option />

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
          </>
        ) : (
          <div
            className=" h-60 flex-col gap-3 font-bold
         flex justify-center items-center"
          >
            <h1>Click to Start Quiz</h1>
            <Button onClick={() => setStartQuiz(true)}>Start</Button>
          </div>
        )}
      </div>
    </div>
  );
}
