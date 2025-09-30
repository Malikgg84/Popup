import React, { useState } from "react";
import OldCounter from "./OldCounter";

export default function Counter({counterName}) {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);
  return (
    <>
    <h1 className="text-center text-3xl -ml-[100px]">{counterName}</h1>
      <div className=" container flex flex-col items-center justify-center gap-2 [&_button]:p-3">
        <h1>{counter}</h1>
        <div className="button flex gap-3">
          <button
            onClick={() => {
              setCounter((pre) => pre + 1);
            }}
            className="rounded-[5px] border bg-blue-400"
          >
            +
          </button>
          <button
            onClick={() => {
              setCounter((pre) => pre - 1);
            }}
            className="rounded-[5px] border bg-blue-400"
          >
            -
          </button>
        </div>
      </div>

      <div className=" mt-3 container flex flex-col items-center justify-center gap-2 [&_button]:p-3">
        <h1>{counter2}</h1>
        <div className="button flex gap-3">
          <button
            onClick={() => {
              setCounter2((pre) => pre + 1);
            }}
            className="rounded-[5px] border bg-gray-500"
          >
            +
          </button>
          <button
            onClick={() => {
              setCounter2((pre) => pre - 1);
            }}
            className="rounded-[5px] border bg-gray-500"
          >
            -
          </button>
        </div>
      </div>


      
    </>
  );
}
