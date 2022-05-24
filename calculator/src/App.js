import { useState } from 'react';

function App() {
  const [calc, setCalc] = useState(''); //Defino que es un string
  const [result, setResult] = useState('');

  const operators = ['/', '+', '-', '*', '.'];
  const updateCalc = value => {
    // Evaluo si el ultimo valor es un operador y si la calculadora no tiene nada O si el ultimo valor es tamb un operador
    // Para solo poder escribir operadores si hay ya numeros.
    if(
      operators.includes(value) && calc === '' ||
      operators.includes(value) && operators.includes(calc.slice(-1))
    ){ return;}

    setCalc(calc + value);

    if(!operators.includes(value)){
      setResult(eval(calc + value).toString());
    }
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

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if(calc == ''){
      return;
    }
    const value = calc.slice(0, -1); //To remove last value
    setCalc(value);
  }

  return (
    <div className="App">
        <div className="calculator">
          <div className="display">
            {result ? <span>({result})</span> : ''}&nbsp;
            {calc || '0'}
          </div>  

          <div className="operators">
            <button onClick={() => updateCalc('/')}>/</button>
            <button onClick={() => updateCalc('*')}>*</button>
            <button onClick={() => updateCalc('+')}>+</button>
            <button onClick={() => updateCalc('-')}>-</button>

            <button onClick={deleteLast}>DEL</button>
          </div>

          <div className="digits">
            { createNumbers() }
            <button onClick={() => updateCalc('0')}>0</button>
            <button onClick={() => updateCalc('.')}>.</button>

            <button onClick={calculate}>=</button>
          </div>

        </div>
    </div>
  );
}

export default App;
