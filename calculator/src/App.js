import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState(''); //Defino que es un string
  const [result, setResult] = useState('');

  const operators = ['/', '+', '-', '*', '.'];
  const updateCalc = value => {
    setCalc(calc + value);
  }


  const createNumbers = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>  
      )
    }
    return digits;
  }

  return (
    <div className="App">
        <div className="calculator">
          <div className="display">
            {result ? <span>(0)</span> : ''} {calc || '0'}
          </div>  

          <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>

            <button>DEL</button>
          </div>

          <div className="digits">
            { createNumbers() }
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>

            <button>=</button>
          </div>

        </div>
    </div>
  );
}

export default App;
