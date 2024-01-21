// import React, { useCounter } from "react";

// const counter = (state, action) => {
//   switch (action.type) {
//     case "Increment":
//       return { count: state.count + 1, showText: state.showText };
//     case "decrement":
//       return { count: state.count - 1, showText: state.showText };
//     default:
//       return state;
//   }
// };

// const CounterExample = () => {
//   const [state, dispatch] = useCounter(counter, { count: 0, showText: true });

//   return (
//     <div>
//       <h1>{state.count}</h1>
//       <button
//         onClick={() => {
//           dispatch({ type: "increment" });
//           dispatch({ type: "decrement" });
//         }}>
//         Click Here
//       </button>

//       {state.showText && <p>This is a text</p>}
//     </div>
//   );
// };

// export default CounterExample;
import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1, showText: state.showText };
    case "decrement":
      return { count: state.count - 1, showText: !state.showText };
    default:
      return state;
  }
};

const ReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}>
        increase
      </button>

      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}>
        Decrease
      </button>

      {state.showText && (
        <p>
          Easy challenge: Create a simple counter app using React hooks.
          Implement the buttons to Increment and Decrement ton the counter value
        </p>
      )}
    </div>
  );
};

export default ReducerExample;
