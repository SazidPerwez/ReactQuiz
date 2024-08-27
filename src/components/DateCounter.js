import { type } from "@testing-library/user-event/dist/type";
import { useState, useReducer } from "react";

// function DateCounter() {
//   const [count, setCount] = useState(0);
//   const [step, setStep] = useState(1);

//   // This mutates the date object.
//   const date = new Date("june 21 2027");
//   date.setDate(date.getDate() + count);

//   const dec = function () {
//     // setCount((count) => count - 1);
//     setCount((count) => count - step);
//   };

//   const inc = function () {
//     // setCount((count) => count + 1);
//     setCount((count) => count + step);
//   };

//   const defineCount = function (e) {
//     setCount(Number(e.target.value));
//   };

//   const defineStep = function (e) {
//     setStep(Number(e.target.value));
//   };

//   const reset = function () {
//     setCount(0);
//     setStep(1);
//   };

//   return (
//     <div className="counter">
//       <div>
//         <input
//           type="range"
//           min="0"
//           max="10"
//           value={step}
//           onChange={defineStep}
//         />
//         <span>{step}</span>
//       </div>

//       <div>
//         <button onClick={dec}>-</button>
//         <input value={count} onChange={defineCount} />
//         <button onClick={inc}>+</button>
//       </div>

//       <p>{date.toDateString()}</p>

//       <div>
//         <button onClick={reset}>Reset</button>
//       </div>
//     </div>
//   );
// }
// export default DateCounter;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Using Reducer//////////

const initialState = { count: 0, step: 1 };

function reduce(state, action) {
  // if (action.type === "inc") return state + 1;
  // if (action.type === "dec") return state - 1;
  // if (action.type === "setCount") return action.payload;
  // if (action.type === "reset") return initialState;

  // Another Way
  switch (action.type) {
    case "inc":
      return { ...state, count: state.count + state.step };
    case "dec":
      return { ...state, count: state.count - state.step };
    case "setCount":
      return { ...state, count: action.payload };
    case "setStep":
      return { ...state, step: action.payload };
    case "reset":
      return initialState;
    default:
      throw Error("Unknow State");
  }
}

export default function DateCounter() {
  const [state, dispatch] = useReducer(reduce, initialState);
  const { count, step } = state;

  function dec() {
    dispatch({ type: "dec" });
  }

  function inc() {
    dispatch({ type: "inc" });
  }

  function defineCount(e) {
    dispatch({ type: "setCount", payload: Number(e.target.value) });
  }

  function defineStep(e) {
    dispatch({ type: "setStep", payload: Number(e.target.value) });
  }
  function reset() {
    dispatch({ type: "reset" });
  }

  const date = new Date("may 19 2024");
  date.setDate(date.getDate() + count);
  return (
    <div className="counter">
      <div>
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={defineStep}
        />
        <span>{step}</span>
      </div>

      <div>
        <button onClick={dec}>-</button>
        <input value={count} onChange={defineCount} />
        <button onClick={inc}>+</button>
      </div>

      <p>{date.toDateString()}</p>

      <div>
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}
