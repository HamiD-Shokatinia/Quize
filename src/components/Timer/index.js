import { useEffect, useState } from "react";

function Timer({qNum,setQNum, onZero }) {
  const [counter, setCounter] = useState(10);

  // Third Attempts
  useEffect(() => {
    const timer =
      counter > 0 && setInterval(() => setCounter(counter - 1), 1000);
    
     if(counter==0&&qNum<5){
      setQNum(qNum+1);
      onZero();
      setCounter(10)
     }
    
    return () => clearInterval(timer);
  }, [counter]);

  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <h1 style={{ color: `${counter <= 3 ? "red":"black"}` }}>{counter}</h1>
    </div>
  );
}

export default Timer;
