import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NUM_1 } from '../slice/Slice';

function FirstComponent() {


   const [value,setValue] =useState(0);
   const dispatch = useDispatch();

const handleChange=(e)=>{
    setValue(e.target.value);
    dispatch(NUM_1(e.target.value))


}

  return (
   
    <>

    <label> Enter the number</label>
    <input type="number" value={value} onChange={handleChange} />
    
    </>
  )
}

export default FirstComponent