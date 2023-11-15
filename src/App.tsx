import { useEffect, useState } from "react";
// import Button from "./Button";
// import "./App.css";
// import bgImg from "./assets/background_img.jpg";

function App() {
  // const [totalSeconds, setTotalSeconds] = useState(0);  // tu totalSecod 
  // const [isRunning, setIsRunning] = useState(false); // Set trang thai khi nao 
  // const [timerId, setTimerId] = useState(0); // id iNVERAL ->ClearInterval 
  // side effect : Fetch API, setInval, event 

  //
  // Tai sao phai co timerId
  
  // console.log('I rendered!');
  // useEffect(() => {
  //   let intervalId;

  //   if (isRunning == true) { //Start 
  //     intervalId = setInterval(() => {
  //       setTotalSeconds((totalSeconds) => totalSeconds + 1);
  //     }, 1000);
  //     setTimerId(intervalId); 
  //   } else { // Stop 
  //     clearInterval(timerId);
  //   }

  //  return () => {
  //     clearInterval(timerId);
  //   };
  // }, [isRunning]);

  // const hours = Math.floor(totalSeconds / 3600);
  // const minutes = Math.floor((totalSeconds - hours * 3600) / 60);
  // const seconds = totalSeconds - hours * 3600 - minutes * 60;

  // const timeString =
  //   hours.toString().padStart(2, "0") +
  //   ":" +
  //   minutes.toString().padStart(2, "0") +
  //   ":" +
  //   seconds.toString().padStart(2, "0");
  // return (
  //   <div className="relative mx-auto w-full h-screen text-center flex items-center justify-center ">
  //     <img
  //       src={bgImg}
  //       alt=""
  //       className="absolute w-full h-full object-contain z-0"
  //     />
  //     <div className="relative z-10 p-24 text-white text-xl flex gap-x-4 flex-col">
  //       <h1 className=" text-4xl text-green-400">Stop Watch</h1>
  //       <div className="flex items-center justify-center mb-4">
  //         <p className=" text-4xl text-white">{timeString}</p>
  //       </div>
  //       <div className="flex items-center flex-row gap-x-6">
  //         <Button
  //           color="bg-green-500"
  //           content="Start"
  //           handleClick={() => setIsRunning(true)} 
  //         />
  //         <Button
  //           color="bg-red-500"
  //           content="Stop"
  //           handleClick={() => setIsRunning(false)} 
  //         />
  //         <Button
  //           color="bg-purple-900"
  //           content="Reset"
  //           handleClick={() => { 
  //             setIsRunning(false);
  //             setTotalSeconds(0); 
  //           }}
  //         />
  //       </div>
  //     </div>
  //     <button onClick={handle} className="text-white">Click me</button>;
  //   </div>

  //);
  const timerIdRef = useRef(0);
  const [count, setCount] = useState(0);

  const startHandler = () => {
    if (timerIdRef.current) { return; }
    timerIdRef.current = setInterval(() => setCount(c => c+1), 1000);
  };

  const stopHandler = () => {
    clearInterval(timerIdRef.current);
    timerIdRef.current = 0;
  };

  useEffect(() => {
    return () => clearInterval(timerIdRef.current);
  }, []);

  return (
    <div>
      <div>Timer: {count}s</div>
      <div>
        <button onClick={startHandler}>Start</button>
        <button onClick={stopHandler}>Stop</button>
      </div>
    </div>

  )
}



export default App;
