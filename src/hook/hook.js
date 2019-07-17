import React, { useState } from 'react';

export default () => {
  const [obj, setObject] = useState({name: 'andrew', age: 32})

  return (
    <div>
      <div>
        <h3>useState</h3>
        <div>Name: {obj.name}</div>
        <div>Age: {obj.age}</div>
        <button onClick={() => setObject({...obj, age: obj.age + 1})}>+</button>
        <button onClick={() => setObject({...obj, age: obj.age - 1})}>-</button>
      </div>
    </div>
  )
}

