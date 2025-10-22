import { useState } from 'react'
import './App.css'
import Buttons from './components/buttons.jsx'
import Inputs from './components/input.jsx'
import styles from "./components/componentcss.module.css"

function App() {
  const [calcu, setCalcu] = useState("");
  const onbuttonclick = (v) => {
    const operators = ["/", "*", "-", "+", "."];

    if (v === "C") {
      setCalcu("");
    } 
    else if (v === "E") {
      try {
        setCalcu(eval(calcu).toString());
      } catch {
        setCalcu("Error");
      }
    } 
    else if (operators.includes(v)) {
      const lastChar = calcu[calcu.length - 1];
      if (operators.includes(lastChar)) {
        return; 
      } else {
        setCalcu((prev) => prev + v);
      }
    } 
    else {
      setCalcu((prev) => prev + v);
    }
  };

  return (<>  
  <div id={styles.h1}>#2nd Project (Basic-Calculator)</div>
    <div id={styles.body}>
    <div id={styles.container}>
      <Inputs aryan={calcu}/>
      <Buttons onbuttonclick={onbuttonclick}/>
    </div>
    </div>
    </> 
  );
}

export default App;
