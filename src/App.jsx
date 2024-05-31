import './App.css'
import Header from './component/Header/Header.jsx'
import VideoPlayer from './component/VideoPlayer/VideoPlayer.jsx'
import Comments from "./component/Comments/Comments.jsx"
import VideoList from './component/VideoList/VideoList.jsx'
import Video from './Data/video-details.json'
import { useState } from 'react'

function App() {
  const [sharedState, setSharedState] = useState(Video)

  return (
    <>
      <Header />
      <VideoPlayer sharedState={sharedState}/>
      <Comments sharedState={sharedState}/>
      <VideoList setSharedState={setSharedState}/>
      </>
  )
}

export default App
