import React,{useState} from 'react'

function Two(props) {
const [num1, setnum1] = useState('0')

const handleChange=(e)=>{
    setnum1(e.target.value)
    props.temp2(e.target.value)
    }


  return (<>

    <label>enter the number</label>
  <input type='number' value={num1} onChange={handleChange}></input>
  </>
  )
}

export default Two