import './VideoList.scss'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const VideoList = ({activeVideo, setActiveVideo, videoData}) => {

    const baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/'
    const apiKey = '02a32350-3224-4f83-8c80-acd743ebc544'

    const [videoList, setVideoList] = useState([])

    const fetchVideos = async() =>{
        const videos = await axios(`${baseUrl}videos?api_key=${apiKey}`)
        console.log(videos)
        setVideoList(videos.data)
        console.log(videos.data)
    }

    useEffect(()=>{
        fetchVideos();
    }, [])

    console.log(videoList)
    return (
        <section className='video__list'>
            <h2 className='video__next'>NEXT VIDEOS</h2>
            {videoList
            .filter(video => video.id !== activeVideo.id)
            .map(video =>
            <section key={video.id} onClick={()=> setActiveVideo(video)} className='video__container'>
                <article className='video__individual'>
                    <img className='video__img' src={video.image} />
                    <div className='video__details'>
                        <h3 className='video__title'>{video.title}</h3>
                        <h4 className='video__channel'>{video.channel}</h4>
                    </div>
                </article>
            </section>
            )}
        </section>
    )
}

export default VideoList
