
import './App.css';
import { useState } from "react";

 
function App() {
  const [textColor, setTextColor] = useState("black");


  
  return (
    <div className='App'>
      <button onClick = {() => {
        // setShowText(!showText)
        setTextColor(textColor === "black" ?  "red": "black");
      }}>Changing the color</button>
       <h1 style={{color: textColor}}>Hi my name is Nasim Qureshi</h1>}
    </div>
    
   
  );
}

export default App;
