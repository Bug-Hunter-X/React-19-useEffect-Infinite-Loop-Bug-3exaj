```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let mounted = true; // Flag to track component mount status
    const updateCount = async () => {
       await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate async operation
       if (mounted) {
         setCount(prevCount => prevCount + 1); 
       }
    };
    updateCount();
    return () => { 
      mounted = false; // Prevent state updates after unmount
     };
  }, []); // Empty dependency array to run only once

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```