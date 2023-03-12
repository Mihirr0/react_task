import React,{useState} from 'react'

function One(props) {
const [num, setnum] = useState('0')

const handleChange=(e)=>{
    setnum(e.target.value)
    props.temp1(e.target.value)
    }


  return (<>

    <label>enter the number</label>
  <input type='number' value={num} onChange={handleChange}></input>
  </>
  )
}

export default One