import React, { useState, useEffect } from 'react';

let timer = null

export default () => {
  const [obj, setObject] = useState({name: 'andrew', age: 32})
  useEffect(() => {
    document.title = 'componentDidMount' + obj.age
  }, [obj.age])

  useEffect(() => {
    timer = setInterval(() => {
      setObject(prevObj => ({...prevObj, age: prevObj.age + 1}))
    }, 1000)

    return () => {
      document.title = 'componentUnmount'

      clearInterval(timer)
    }
  }, [])

  return (
    <div>
      <div>
        <h3>useState</h3>
        <div>Name: {obj.name}</div>
        <div>Age: {obj.age}</div>
        <button onClick={() => setObject({...obj, age: obj.age + 1})}>+</button>
        <button onClick={() => setObject({...obj, age: obj.age - 1})}>-</button>
      </div>

      <div>
        <h3>useEffect</h3>
        <button onClick={() => clearInterval(timer)}>Clear interval of document.title</button>
      </div>
    </div>
  )
}

