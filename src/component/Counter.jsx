import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'






export const Counter = () => {
  const [count, setCount] = useState(0);
  const [stopcount, setstopCount] = useState(0);
  const [value, setValue] = useState("");
  const [stopValue, setstopValue] = useState("");
  const [start,setStart]= useState(false);

  const startTimer = (value) => {
    setCount(value);
  };

  const stopTimer = (value) => {
    setstopCount(value);
  };

  useEffect(()=>{
    let id;
      if(count<stopcount){
         id = setInterval(() => {
            setCount((count)=>{
                if(count==stopcount){
                    clearInterval(id);
                    return count
                }
                return Number(count) + 1
            })
          }, 1000);
      }
      else{
        id = setInterval(() => {
            setCount((count)=>{
                if(count==stopcount){
                    clearInterval(id);
                    return count
                }
                return Number(count) - 1
            })
          }, 1000);
      }
     

      return ()=>{
          clearInterval(id);
      }
  },[start])



  const resetAll = ()=>{
    setValue("");
    setstopValue("");
    setCount(0);
    setstopCount(0);
  }
  return (
    <div className='counter'>
      <h1>Counter Start at: {count}</h1>
      <h1>Counter Stop at: {stopcount}</h1>

      <div>
       <label htmlFor="">Set Counter start: </label> <input
          type="number"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Counter start"
        />
        <button onClick={() => startTimer(value)}>set</button>
        </div>
        <br />
        <div>
        <label htmlFor="">Set Counter stops: </label> <input
          type="number"
          value={stopValue}
          onChange={(e) => setstopValue(e.target.value)}
          placeholder="Counter stop"
         
        />
        <button onClick={() => stopTimer(stopValue)}>set</button>
        </div>
        <br />
    <div>
        <button onClick={() =>setStart(!start)}>Start</button>
        <button onClick={()=>resetAll()}>Reset All</button>
      </div>
    </div>
  );
}

