import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Banner from './components/Banner'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import Apropos from './pages/a-propos'
import Footer from './components/Footer'
import GlobalStyle from './GlobalStyle'
import Error from './components/Error'
import Logement from './pages/logement'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router basename={import.meta.env.BASE_URL}>
      <GlobalStyle />
      <div className='container'>
        <Banner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/A-propos" element={<Apropos />} />
          <Route path="/logement/:pageNumber" element={<Logement />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </StrictMode>,
)