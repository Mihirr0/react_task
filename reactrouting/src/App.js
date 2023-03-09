
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Home from './components/Home';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Routes>
        <Route path="/" >
        <Navbar/>
          </Route>
      <Route exact path="/">
                <Home/>
              </Route>
              <Route exact path="/form">
                <Form/>
              </Route>
      </Routes>
      
      
      
      </BrowserRouter>
     
    </div>
  );
}

export default App;
