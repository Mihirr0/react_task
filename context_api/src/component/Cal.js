import React ,{useContext}from 'react'
import SumContext from '../context/Context'
// import { SumContext } from '../App'

function Cal() {
    const getContext=useContext(SumContext)
  return (
    <button onClick={getContext.calculate}>calculate sum </button>
  )
}

export default Cal