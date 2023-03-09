
import './App.css';
import SumContext from './context/Context';
import {  useState } from 'react';
import One from './component/One';
import Two from './component/Two';
import Cal from './component/Cal';
import Result from './component/Result';

function App() {
  
  const [num1,setValue1]=useState();
  const [num2,setValue2]=useState();
  const [result,setResult]=useState();
  
  const handleChange2 = (e) =>{
    setValue2(e.target.value);
    console.log(e.target.value)
    
  }
  const handleChange1 = (e) =>{
    setValue1(e.target.value);
    
    console.log(e.target.value)
  }
  
  
  
  const calculate = () => {
    
    const sum =parseInt(num1)+parseInt(num2);
    setResult(sum);
    console.log("🚀 ~ file: App.js:33 ~ calculateSum ~ sum:", sum)
  }
  
  return (<>
    <SumContext.Provider value={{num1,setValue1,num2,setValue2,result,setResult,calculate,handleChange1,handleChange2}}>

   <One/>
   <Two/>
   <Cal/>
   <Result/>
    </SumContext.Provider>
  </>

  
  );
}

export default App;
// export const SumContext= createContext();
