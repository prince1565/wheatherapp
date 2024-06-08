import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { useEffect, useState } from 'react';

function App() {
  const [text,setText]=useState('Enable Dark Mode');
  const [mode,setMode]= useState('light');
  

    const toggleMode= () =>{
      if(mode === 'light')
      {
        setMode('dark');
        setText('Enable Light Mode');
        
        document.body.style.backgroundColor ='#042743';
  
      }
      else{
        setMode('light');
        setText('Enable Dark Mode');
        document.body.style.backgroundColor ='white';
      }
    }
  return (
    <div className="App">
      <Home mode={mode}  toggleMode={toggleMode} text={text} />
    </div>
  );
}

export default App;
