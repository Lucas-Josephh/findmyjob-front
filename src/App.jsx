import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './component/home/home'
import Navbar from './component/shared/navbar/Navbar'
import Footer from './component/shared/footer/Footer'
import Offer from './component/offer/Offer'
import Companie from './component/Companie/Companie'
import Description from './component/description/Description'
import Info from './component/info/Info'
import Publication from './component/publication/Publication'
import './App.scss'

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offres" element={<Offer />} />
          <Route path="/entreprises" element={<Companie />} />
          <Route path="/description" element={<Description />} />
          <Route path="/info" element={<Info />} />
          <Route path="/publication" element={<Publication />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}