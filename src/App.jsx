import './App.css'
import './styles/partials/global.scss'
import Header from './component/Header/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage.jsx'
import VideoDetails from './component/VideoDetails/VideoDetails.jsx'
import UploadPage from './pages/UploadPage/UploadPage.jsx'
import Comments from './component/Comments/Comments.jsx'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videos/:videoId' element={<><VideoDetails /></>} />
        <Route path='/UploadPage' element={<UploadPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
