import { useEffect, useState } from "react";
import '../../styles/partials/global.scss'
import VideoPlayer from "../../component/VideoPlayer/VideoPlayer";
import VideoDetails from "../../component/VideoDetails/VideoDetails";
import Comments from "../../component/Comments/Comments";
import VideoList from "../../component/VideoList/VideoList";
import axios from "axios";
import { useParams } from "react-router-dom";

const HomePage = () => {
    const baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/'
    const apiKey = '02a32350-3224-4f83-8c80-acd743ebc544'

    const [activeVideo, setActiveVideo] = useState(null)
    const {videoId} = useParams();
    
    const fetchVideo = async() =>{
        try {
            const videos = await axios(`${baseUrl}videos/${videoId?videoId:'84e96018-4022-434e-80bf-000ce4cd12b8'}?api_key=${apiKey}`)
            setActiveVideo(videos.data)
            console.log(videos.data)
        }catch (error){
            console.log('Error fetching video:', error);
        }
    };

    const [videoList, setVideoList] = useState([])

    const fetchVideos = async() =>{
        try{
            const videos = await axios(`${baseUrl}videos?api_key=${apiKey}`)
            setVideoList(videos.data)
        }catch (error){
            console.log('Error fetching video list:', error);
        }
    };    

    useEffect(()=>{
        fetchVideos();
    }, [])

    useEffect(()=>{
        fetchVideo()
    }, [videoId])

    if (!activeVideo){
        return (
            <h1>Sorry.... the page is still loading!</h1>
        )
    }
    
    return (
        <>
            <VideoPlayer activeVideo={activeVideo} />
            <div className='desktop__view'>
                <div className='desktop__view--left'>
                    <VideoDetails activeVideo={activeVideo} />
                    <Comments activeVideo={activeVideo} />
                </div>
                <VideoList className='desktop__view--right'
                    activeVideo={activeVideo}
                    videoList={videoList}
                />
            </div>
        </>
    )
}

export default HomePage