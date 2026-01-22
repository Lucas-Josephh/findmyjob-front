import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from './component/home/home'
import Navbar from './component/shared/navbar/Navbar'
import Footer from './component/shared/footer/Footer'
import Offer from './component/offer/Offer'
import Companie from './component/Companie/Companie'
import Description from './component/description/Description'
import Info from './component/info/Info'
import Publication from './component/publication/Publication'
import Authentification from './component/authentification/Authentification'
import MyOffers from './component/myOffers/MyOffers'
import './App.scss'
import Register from './component/register/Register'

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  )
}

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && location.pathname !== "/register" &&
        <Navbar />
      }
        
      <Routes>
        <Route path="/" element={<Authentification />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route path="/offres" element={<Offer />} />
        <Route path="/entreprises" element={<Companie />} />
        <Route path="/description" element={<Description />} />
        <Route path="/info" element={<Info />} />
        <Route path="/publication" element={<Publication />} />
        <Route path="/myoffers" element={<MyOffers />} />
      </Routes>

      {location.pathname !== "/" && location.pathname !== "/register" &&
        <Footer />
      }
    </>
  )
}