import React from 'react'
import Start from './pages/start/Start'
import Heart from './pages/heart/Heart'
import { BrowserRouter, Route , Routes} from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={< Start />} />
      <Route exact path="/heart" element={< Heart />} />
    </Routes>
  </BrowserRouter>
  )
}