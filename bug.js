```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, including the initial one
    console.log('Effect running:', count);
    //Problem: if this effect performs an asynchronous operation that updates count,
    //it might trigger an infinite loop because it re-runs after every state update.
    return () => {
      // Cleanup function (optional)
    };
  }, [count]); // Add count to the dependency array to only run when count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```