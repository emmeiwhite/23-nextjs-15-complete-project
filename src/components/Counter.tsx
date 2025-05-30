'use client'

import { useState } from 'react'
const Counter = () => {
  const [counter, setCounter] = useState(0)
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold text-center">{counter}</h2>
      <button
        onClick={() => setCounter(prev => prev + 1)}
        className="rounded px-3 py-1 bg-orange-400 hover:bg-orange-500 text-white">
        increment
      </button>
    </div>
  )
}
export default Counter
