import './App.css'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
// import OrderPage from './pages/OrderPage.jsx'
import StorePage from './pages/StorePage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignUpPage from './pages/SignUpPage.jsx'
// import Home from './components/Home'
// import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path='/'>
            <Route index='/store' element={<StorePage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/order' element={<StorePage />} />
            <Route path='/store' element={<StorePage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignUpPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
