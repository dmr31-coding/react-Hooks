import { useState } from 'react'

import './App.css'
import UseStateHook from './AllHooks/UseStateHook'
import UsestateOne from './AllHooks/UsestateOne'
import UsestateTwo from './AllHooks/UsestateTwo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UseStateHook />

      <UsestateOne />

      <UsestateTwo />
    </>
  )
}

export default App
