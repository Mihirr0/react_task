import {useState} from 'react';
import './App.css';
import One from './component/One';
import Two from './component/Two';
import Button from './component/Button';
import Ans from './component/Ans';

function App() {

  const [N1, setN1] = useState('')
  const [N2, setN2] = useState('')
  const [result, setresult] = useState('')


const handleClick=(e)=>{
  setresult(parseInt(N1)+parseInt(N2));

}
  return (
    <div className="App">
      <One temp1={setN1}/>
      <Two temp2={setN2}/>
      <Button Click={handleClick}/>
      <Ans show={result}/>
    </div>
  );
}

export default App;
