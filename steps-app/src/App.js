import { useState } from "react";

const messages = [
  "Learn React 💂🏾",
  "Apply for jobs 🗿",
  "Invest your new income 😎",
];

// The name of the component matches the file name and that will be the pattern moving forward
// In react each component maintains it's own state, even if they are from the same component

export default function App() {
  return (
    <div>
      <Steps />
      <Steps />
    </div>
  );
}

function Steps() {
  //useState is a function that we pass in the default value of the state and it will return an array the value and a function to change the value so we may need to destructure it
  //all react functions that start with use are REACT HOOKS, only call hooks at the top level of the function eg. here at the top of the function and not inside a function or a loop or an if statement
  //we should only update state using a setter functiona like setStep in this case and not manually
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  // const [test, setTest] = useState({ name: "Ben"})

  //we can define any functions we want in the component body (we pass the function (handlePrevious) and not call it (handlePrevious()))
  function handlePrevious() {
    // alert("Previous");
    //do not use current state to update the state, instead use a call back function for the current state
    if (step > 1) setStep((s) => s - 1);
  }
  // instead of having onClick={() => alert("Previous")} we put the alert in a function and just pass the function
  function handleNext() {
    // alert("Next");
    //alternatively we using the set step to update
    if (step < 3) {
      setStep((s) => s + 1);
      // setStep((s) => s + 1);
    }
    //setTest({name: "Benson"});
  }

  return (
    <div>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            {" "}
            Step {step}: {messages[step - 1]} {/* test.name */}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              Next{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

/**
 * State in React: most important in React
 * State - is data that a component can hold over time, necessary for information that it needs to remember throughout the app's lifecycle
 *    * "component's memory"
 *
 * "state variable" / "piece of state": A single variable in a component (component state)
 *
 * - updating component state triggers React to re-render the component
 *
 *  ** state keeps data in sync with the UI (state is a tool. Mastering state will unlock the power of React development) state allows developers to:
 * 1 - update the component's view (by re-rendering it)
 * 2 - persist local variables between renders
 *
 * React is all about immutability; do not manually change the state but use setter functions
 *
 *
 *
 * THE MECHANICS OF STATE IN REACT
 * - we don't do direct DOM manipulations in react because react is declarative
 *
 * How is component view updated then? - In react, a view is updated by re-rendering the component
 * - In React, a view is updated by re-rendering the component
 * - A component is re-rendered when its state is updated
 * - So to update view, we update state
 *
 * React is called "React" because - React REACTS to STATE changes by re-rendering the UI
 *
 * Frameworks exist to keep data in sync with the User Interface (we just seen how react does it)
 *
 *
 *
 * ONE COMPONENT, ONE STATE
 * - Each component has and manages its own state, no matter how many times we render the same component
 *
 * UI AS A FUNCTION OF STATE
 *  UI = f(state )
 * react is a constantly change of state over time and correctly displaying the state
 *
 *
 * IN PRACTICAL TERMS
 * -use a state variable for any data that a component should keep track of ("remember") over time. This is data that will change at some point. In Vanilla JS, that's a let variable, or an [] or {}
 *
 * - whenever you want something in the component to be dynamic, create a piece of state related to that "thing", and update the state when the "thing" should change (aka "by dynamic")
 *    Example: A modal window can be open or closed. so we create a state variable isOpen that tracks whether the modal is open or not. On isOpen = true we display the window, on isOpen = false we hide it
 *
 * - If you want to change the way a component looks, or the data it displays, update its stat. This usually happens in an event handler function
 *
 * - When building a component, imagine its view as a reflection of state changing over time.
 *
 * - (Beginners mistake) For data that should not trigger component re-renders, don't use state. Use a regular variable instead.
 */
