import React ,{useContext}from 'react'
import SumContext from '../context/Context'
// import { SumContext } from '../App'

function Result() {
    const getContext=useContext(SumContext)
  return (
    <h2 >  Result :{getContext.result}</h2>
  )
}

export default Result