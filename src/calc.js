import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHistory } from "./HistoryContext";
import './calc.css';

const Calc = () => {
    const [expression, setExpression] = useState('');
    const [result, setResult] = useState(0.0);
    const navigate = useNavigate();
    const { setHistory } = useHistory();
    const append = (value) => {
      if (value === 'π') value = Math.PI.toString();
      if (value === 'e') value = Math.E.toString();
      setExpression(expression + value);
    };
    const clearEntry = () => {
      setExpression(expression.slice(0, -1));
    };
    const clearAll = () => {
      setExpression('');
      setResult(0);
    };
    const evaluteexperssion = () => {
      fetch('http://localhost:8080/evaluate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expression),
      })
        .then((response) => response.text())
        .then((data) => {
          let calcResult = data;
          if (calcResult === 'Infinity') calcResult = 'E';
          if (calcResult === 'NaN') calcResult = 'E';
          setResult(calcResult);
          setHistory(prevHistory => [...prevHistory, `${expression} = ${calcResult}`]); 
          setExpression(calcResult);
        })
        .catch(() => {
          setResult('Error');
          setExpression('Error');
        });
    };
  return (
    <div className="container">
      <div id="calculator">
        <div className="display">{expression || result}</div>
        <div className="buttons">
          <button onClick={() => append('0')} className="zero">0</button>
          <button onClick={() => append('%')}>%</button>
          <button className="button1" onClick={clearEntry}>CE</button>
          <button className="button1" onClick={clearAll}>C</button>
          <button className="button1" onClick={clearEntry}>DEL</button>
          <button onClick={() => append('^(2)')}>x²</button>
          <button onClick={() => append('^(0.5)')}>√x</button>
          <button onClick={() => append('^(-1)')}>x⁻¹</button>
          <button onClick={() => append('/')} className="oprations">÷</button>
          <button onClick={() => append('(')}>(</button>
          <button onClick={() => append(')')}>)</button>
          <button onClick={() => append('π')}>π</button>
          <button onClick={() => append('e')}>e</button>
          <button onClick={() => append('1')}>1</button>
          <button onClick={() => append('2')}>2</button>
          <button onClick={() => append('3')}>3</button>
          <button onClick={() => append('+')} className="oprations">+</button>
          <button onClick={() => append('4')}>4</button>
          <button onClick={() => append('5')}>5</button>
          <button onClick={() => append('6')}>6</button>
          <button onClick={() => append('-')} className="oprations">-</button>
          <button onClick={() => append('7')}>7</button>
          <button onClick={() => append('8')}>8</button>
          <button onClick={() => append('9')}>9</button>
          <button onClick={() => append('*')} className="oprations">x</button>
          <button onClick={() => append('0')}>0</button>
          <button onClick={() => append('.')}>.</button>
          <button className="button2" onClick={evaluteexperssion}>=</button>
        </div>
      </div>
      <div className="hist">
        <button onClick={() => navigate('/history')}>Go to History</button>
      </div>
    </div>
  );
};

export default Calc;
