import React, { useState } from "react";

function CounterApp(){
  const [count, setCount]= useState(0);
  return(
    <div>
      <div>
        <h1>Sayaç Uygulaması</h1>
        <div>{count}</div>
        <div>
          <button onClick={() => setCount(count + 1)}>Artır</button>
          <button onClick={() => setCount(count - 1)}>Azalt</button>
          <button onClick={() => setCount(0)}>sıfırlar</button>
        </div>
      </div>
    </div>
  )
}

export default CounterApp;
