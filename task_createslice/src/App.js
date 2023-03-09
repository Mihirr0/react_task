import logo from './logo.svg';
import './App.css';
import store from './store/Store';
import { Provider } from 'react-redux';
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ButtonComponent from './components/ButtonComponent';
import ResultComponent from './components/ResultComponent';

function App() {
  return (
    <div className="App">
     <Provider store={store}>
     <FirstComponent/>
     <SecondComponent/>
     <ButtonComponent/>
     <ResultComponent/>



     </Provider>
    </div>
  );
}

export default App;
