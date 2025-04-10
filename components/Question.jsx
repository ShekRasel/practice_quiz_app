import React from 'react'

const Question = ({questionsData,questionIndex}) => {
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