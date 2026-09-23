import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import CategoryBar from './components/CategoryBar.jsx'
import Gallery from './components/Gallery.jsx'
import AddPhotoModal from './components/AddPhotoModal.jsx'
import FiltersOffcanvas from './components/FiltersOffcanvas.jsx'
import Footer from './components/Footer.jsx'
import photos from './data/photos.json'
import './App.css'

function App() {
  const [zdjecia, setZdjecia] = useState(photos)

  return (
    <>
      <div className="container mt-4">
        <h1>Galeria zdjęć</h1>
      </div>
    </>
  )
}

export default App
