import axios from'axios';
import {useEffect,useState} from "react";
import './App.css';


function App() {

const [user, setuser] = useState([]);

let temp =()=>{
  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((response)=>{
    setuser(response.data);
    console.log(response.data);
})
}
useEffect(() => {
  temp()  
}, [])



  return (
    <div>

    
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Phone</th>
      </tr>
    </thead>
    <tbody>
      {user.map((item,index)=>(
        <tr key={index}>
          <td>{item.name}</td>
          <td>{item.phone}</td>
        </tr>
          ))}
    </tbody>
  </table>

  
    

      
     
    </div>
  );
}

export default App;
