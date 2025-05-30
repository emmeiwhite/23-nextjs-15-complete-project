import { useState } from 'react'
const CounterPage = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={() => setCounter(prev => prev + 1)}>increment</button>
    </div>
  )
}
export default CounterPage
