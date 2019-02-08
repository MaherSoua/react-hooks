import React, { useState } from 'react';

export default function ComponentFun() {
  const [count, setCount] = useState(0);
  return(
    <div className="button-container">
      <div className="button" onClick={()=> setCount(count + 1)}>Sample hook use </div>
      <div className="button" onClick={()=> setCount(count - 1)}>Sample hook use </div>
      <div>{count}</div>
    </div>
  );
}
