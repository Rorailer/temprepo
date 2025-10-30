import { useState } from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import Shop from './Pages/Shop'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-18">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
