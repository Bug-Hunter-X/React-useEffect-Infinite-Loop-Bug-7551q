```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect runs after every render, causing an infinite loop
    setCount(count + 1);
  }, [count]); // Missing dependency or incorrect dependency array 

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```