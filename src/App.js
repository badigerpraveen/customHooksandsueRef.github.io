import './App.css'; 
import CounterOne from './components/CounterOne';
import CounterTwo from './components/CounterTwo'; 
import FocusInput from './components/FocusInput';
function App() {
  return (
    <>
    <h1 style={{color:'red',textAlign:'center'}}> Custom Hooks & useRef Hook</h1> 
     <CounterOne/>
     <CounterTwo/> 
     <FocusInput/>
    </>
  );
}

export default App;
