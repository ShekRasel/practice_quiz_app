import React from 'react'

const Result = ({score}) => {
  return (
    <div className='flex min-h-80 justify-center items-center'>
        <h1 className='font-bold'>Your Score is : {score} </h1>
    </div>
  )
}

export default Result