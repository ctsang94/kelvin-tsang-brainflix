import { useState } from "react";
import '../../styles/partials/global.scss'
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import VideoDetails from "../../component/VideoDetails/VideoDetails";
import Comments from "../../component/Comments/Comments";
import VideoList from "../../component/VideoList/VideoList";
import videoData from '../../Data/video-details.json';

const HomePage = () => {
    const [activeVideo, setActiveVideo] = useState(videoData[0])
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