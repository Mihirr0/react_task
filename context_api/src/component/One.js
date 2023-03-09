import React ,{useContext}from 'react'
import SumContext from '../context/Context'
// import { SumContext } from '../App'

function One() {

    const getContext=useContext(SumContext)
  return (
    <>
    <input type="number" value={getContext.num1} onChange={getContext.handleChange1} />
    </>
  )
}

export default One