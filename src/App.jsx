import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './component/home/home'
import Navbar from './component/shared/navbar/Navbar'
import Footer from './component/shared/footer/Footer'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}