import './App.css'
import './styles/partials/global.scss'
import Header from './component/Header/Header.jsx'
import VideoPlayer from './component/VideoPlayer/VideoPlayer.jsx'
import Comments from "./component/Comments/Comments.jsx"
import VideoList from './component/VideoList/VideoList.jsx'
import videoData from './Data/video-details.json'
import { useState } from 'react'

function App() {
  const [activeVideo, setActiveVideo] = useState(videoData[0])

  return (
    <>
      <Header />
      <VideoPlayer activeVideo={activeVideo}/>
      <Comments activeVideo={activeVideo}/>
      <VideoList 
        setActiveVideo={setActiveVideo} 
        activeVideo={activeVideo} 
        videoData={videoData}
      />
    </>
  )
}

export default App
