import React from "react";
import { Button } from "./ui/button";
import { useQuiz } from "@/context/QuizContext";

const Result = () => {
  const { setQuestionIndex, score, setScore, setStartQuiz,timer } = useQuiz();
  return (
    <div className="flex min-h-72 justify-center items-center flex-col gap-4">
      <h1 className="font-bold text-2xl text-green-600">
        Your Score is : {score}{" "}
      </h1>
      <Button
        onClick={() => {
          setStartQuiz(false);
          setScore(0);
          clearInterval(timer);
          setQuestionIndex(0);
        }}
      >
        {" "}
        Home
      </Button>
    </div>
  );
};

export default Result;
