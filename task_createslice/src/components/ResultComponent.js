import React from 'react'
import { useSelector } from 'react-redux'

function ResultComponent() {

   const sum =useSelector((state)=>state.sum)
  return (
   
    <h2>
        result : {sum}
    </h2>
  )
}

export default ResultComponent