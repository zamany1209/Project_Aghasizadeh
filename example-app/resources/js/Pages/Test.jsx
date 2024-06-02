import React, { useState } from 'react';

function MyComponent() {
  const [state, setState] = useState({
    a: {
      b: {
        c: {
          k: 1
        },
        d: {
          e: {
            l: 5
          },
          f: {
            g: {
              z: 9
            }
          }
        }
      }
    }
  });

  const addValueToObject = (obj, path, value) => {
    const newObj = { ...obj };
    let current = newObj;
    for (let i = 0; i < path.length - 1; i++) {
      if (!current[path[i]]) {
        current[path[i]] = {};
      } else {
        current[path[i]] = { ...current[path[i]] };
      }
      current = current[path[i]];
    }
    current[path[path.length - 1]] = value;
    return newObj;
  };

  const handleClick = () => {
    const newPath = ['a', 'b', 'd', 'f', 'g', 'newKey'];
    const newValue = 10;
    const newState = addValueToObject(state, newPath, newValue);
    setState(newState);
  };

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <button onClick={handleClick}>Add Value</button>
    </div>
  );
}

export default MyComponent;
