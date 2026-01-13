import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.scss'
import Home from './component/home/home'
import Navbar from './component/shared/navbar/Navbar'
import Footer from './component/shared/footer/Footer'
import Offer from './component/offer/Offer'
import Companie from './component/Companie/Companie'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres" element={<Offer />} />
          <Route path="/entreprises" element={<Companie />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}