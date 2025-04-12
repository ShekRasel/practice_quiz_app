import { useQuiz } from '@/context/QuizContext';
import { questionsData } from '@/data/question';

const Question = () => {
  const {
    questionIndex,
  } = useQuiz();
const data = questionsData.map((data)=>data.question);
  return (
    <div>
       <p className='bg-gray-100 font-semibold py-2 text-center mt-3'>
       {data[questionIndex]}
       </p>
    </div>
  )
}

export default Question