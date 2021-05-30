import React from 'react'
import Footer from './components/Footer'
import PicturesGrid from './components/PicturesGrid'
import './index.scss'

function App() {
  return (
    <div className="App">
      <main>
        <PicturesGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
