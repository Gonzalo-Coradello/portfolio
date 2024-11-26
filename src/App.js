import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'
import Footer from './components/Footer/Footer'
import DetailContainer from './components/DetailContainer/DetailContainer'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className='App'>
        <header className='App-header'>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path='/' element={<Home />} />
            {/* <Route path='/projects' element={<ProjectsPage />} /> */}
            <Route path='/projects/:id' element={<DetailContainer />} />
            {/* <Route path='/about' element={<About />} /> */}
          </Routes>
          <Footer />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App

