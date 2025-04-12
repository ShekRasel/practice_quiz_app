import { useQuiz } from "@/context/QuizContext";

const Time = () => {
  const {count} = useQuiz();
  return <h1 className="font-bold ">Time left : <span className="text-red-500">{count}</span></h1>;
};

export default Time;
