import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Counter from './components/Counter'
import Stopwatch from './components/Stopwatch'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/stopwatch" element={<Stopwatch />} />
        <Route path='*' element={<h1>No Page Found</h1>} />
      </Routes>
    </div>
  )
}

export default App