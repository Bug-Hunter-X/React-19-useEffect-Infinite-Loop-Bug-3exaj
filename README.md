# React 19 useEffect Infinite Loop

This repository demonstrates a common, yet subtle, error in React 19 applications involving the `useEffect` hook and asynchronous operations. The bug arises when an asynchronous operation within `useEffect` modifies the state variable it depends on, leading to an infinite loop. 

The `bug.js` file shows the problematic code. The `bugSolution.js` provides a corrected version.

## How to reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe the console output and the infinite loop in the browser's console. (It might freeze the browser.)

## Solution

The solution involves carefully managing asynchronous operations within `useEffect` to prevent unintended state updates that trigger the effect repeatedly. Consider using techniques such as: 
* **Promises and async/await:** Control the timing and prevent redundant state changes.
* **Debouncing:** Limit the frequency of state updates.
* **Proper cleanup:** Ensure any asynchronous operations are cleaned up with the return function of `useEffect`. 
Refer to `bugSolution.js` for the corrected code.