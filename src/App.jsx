import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './component/home/home'
import Navbar from './component/shared/navbar/Navbar'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}