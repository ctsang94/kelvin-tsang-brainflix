import './App.scss'
import './styles/partials/global.scss'
import Header from './component/Header/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import UploadPage from './pages/UploadPage/UploadPage.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videos/:videoId' element={<HomePage />} />
        <Route path='/upload' element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
