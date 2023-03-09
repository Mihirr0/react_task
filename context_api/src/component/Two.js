import React ,{useContext}from 'react'

import SumContext from '../context/Context'
// import { SumContext } from '../App'

function Two() {
    const getContext=useContext(SumContext)
  return (
<input type="number" value={getContext.num2} onChange={getContext.handleChange2} />
  )
}

export default Two