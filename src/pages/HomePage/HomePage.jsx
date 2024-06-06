import { useEffect, useState } from "react";
import '../../styles/partials/global.scss'
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import VideoDetails from "../../component/VideoDetails/VideoDetails";
import Comments from "../../component/Comments/Comments";
import VideoList from "../../component/VideoList/VideoList";
import videoData from '../../Data/video-details.json';
import axios from "axios";

const HomePage = () => {
    const baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/'
    const apiKey = '02a32350-3224-4f83-8c80-acd743ebc544'

    const [activeVideo, setActiveVideo] = useState(videoData[0])

    const fetchVideo = async() =>{
        const  videos  = await axios(`${baseUrl}videos?api_key=${apiKey}`)
        setActiveVideo(videos.data)
        console.log(videos.data)
    }

    // useEffect(()=>{
    //     fetchVideo();
    // }, [])

    return (
        <>
            <VideoPlayer activeVideo={activeVideo} />
            <div className='desktop__view'>
                <div className='desktop__view--left'>
                    <VideoDetails activeVideo={activeVideo} />
                    <Comments activeVideo={activeVideo} />
                </div>
                <VideoList className='desktop__view--right'
                    setActiveVideo={setActiveVideo}
                    activeVideo={activeVideo}
                    videoData={videoData}
                />
            </div>
        </>
    )
}

export default HomePage;