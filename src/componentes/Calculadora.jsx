import React, { useState } from 'react'
import "./Calculadora.css"
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export default function Calculadora() {
  const [num,setNum] = useState(0);
  const [oldNum,setOldNum] = useState(0)
  const [operador,setOperador] = useState()

  function inputNum(e){
    let input = e.target.value
    if(num===0){
      setNum(input); 
    } else{
      setNum(num + input); 
    }
     
  }

  function clear(){
    setNum(0);
  }

  function porcentaje(){
    setNum(num / 100);
  }

  function negativo(){
    setNum(num * -1)
  }

  function operadorHandler(e){
    let operadorInput = e.target.value
    setOperador(operadorInput)
    setOldNum(num);
    setNum(0);
  }

  function calcular(){
    if(operador === "/"){
      setNum(parseFloat(oldNum) / parseFloat(num));
    } else if(operador === "X"){
      setNum(parseFloat(oldNum) * parseFloat(num));
    } else if(operador === "+"){
      setNum(parseFloat(oldNum) + parseFloat(num));
    } else if(operador === "-"){
      setNum(parseFloat(oldNum) - parseFloat(num));
    } 
  }

  return (
    <div>
        <Box m={5} />
        <Container maxWidth='xs'> 
          <div className='wrapper'>
            <Box m={12} />
            <h1 className='resultado'>{num}</h1>
            <button onClick={clear}>AC</button>
            <button onClick={negativo}>+/-</button>
            <button onClick={porcentaje}>%</button>
            <button className='orange' onClick={operadorHandler} value="/">/</button>
            <button className='gray' onClick={inputNum} value={7}>7</button>
            <button className='gray' onClick={inputNum} value={8}>8</button>
            <button className='gray' onClick={inputNum} value={9}>9</button>
            <button className='orange' onClick={operadorHandler} value="X">X</button>
            <button className='gray' onClick={inputNum} value={4}>4</button>
            <button className='gray' onClick={inputNum} value={5}>5</button>
            <button className='gray' onClick={inputNum} value={6}>6</button>
            <button className='orange' onClick={operadorHandler} value="-">-</button>
            <button className='gray' onClick={inputNum} value={1}>1</button>
            <button className='gray' onClick={inputNum} value={2}>2</button>
            <button className='gray' onClick={inputNum} value={3}>3</button>
            <button className='orange' onClick={operadorHandler} value="+">+</button>
            <button className='gray doble' onClick={inputNum} value={0}>0</button>
            <button className='gray' onClick={inputNum} value={"."}>.</button>
            <button className='orange' onClick={calcular}>=</button>
            
          </div>
        </Container> 
      </div>
  )
}
