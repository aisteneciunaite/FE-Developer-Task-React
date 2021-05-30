import React from 'react'
import Footer from './components/Footer'
import PicturesGrid from './components/PicturesGrid'
import Header from './components/Header'
import './index.scss'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <PicturesGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
