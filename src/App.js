
import './App.css';
import React, { useState, useEffect } from 'react';

function App() {

  const [number_1, setNumber_1] = useState(0)
  const [number_2, setNumber_2] = useState(0)
  const [result, setResult] = useState(0)
  const [action, setAction] = useState("somar")

  useEffect(() => {
    setResult(calculator())
  }, [number_1, number_2, action])

  const calculator = () => {

    if (action === "somar") {
      return parseFloat(number_1) + parseFloat(number_2)
    }
    else if (action === "subtrair") {
      return parseFloat(number_1) - parseFloat(number_2)
    }
    else{
      return parseFloat(number_1) / parseFloat(number_2)
    }
    

  }

  return (
    <>

      <h1>Calculadora</h1>
      
      <div className='main'>

        <label> Numero 1 </label>
        <input
          type="number"
          value={number_1}
          onChange={(e) => setNumber_1(e.target.value)} />
        
        <label> Numero 2 </label>
        <input
          type="number"
          value={number_2}
          onChange={(e) => setNumber_2(e.target.value)} />

        <select onChange={(e) => setAction(e.target.value)}>
          <option>somar</option>
          <option>subtrair</option>
          <option>dividir</option>
        </select>

        <h2> Resultado : {result} </h2>

      </div>

    </>
  );
}

export default App;