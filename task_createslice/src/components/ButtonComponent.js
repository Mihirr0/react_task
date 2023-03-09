import React from 'react'
import { useDispatch } from 'react-redux'
import { sum } from '../slice/Slice';

function ButtonComponent() {
 

    const dispatch= useDispatch();
const handleClick=()=>{

    dispatch(sum())

}




return (
<button onClick={handleClick}> calculate</button>
)
}

export default ButtonComponent