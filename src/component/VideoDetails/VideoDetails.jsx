import './VideoDetails.scss'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const VideoDetails = () => {
    const baseUrl = 'https://unit-3-project-api-0a5620414506.herokuapp.com/'
    const apiKey = '02a32350-3224-4f83-8c80-acd743ebc544'

    const {videoId} = useParams();

    const [ videoDetails, setVideoDetails] = useState({})

    const fetchVideoDetails = async() =>{
        const videosResponse = await axios(`${baseUrl}videos/${videoId}?api_key=${apiKey}`)
        setVideoDetails(videosResponse.data)
    }

    useEffect(()=>{
        fetchVideoDetails();
    }, [])

    const date = new Date(videoDetails.timestamp)

    return (
        <section className='video'>
            <h1 className='video__title'>{videoDetails.title}</h1>
            <section className='video__stats'>
                <article className='video__stats--top'>
                    <h2 className='video__author'>By {videoDetails.channel}</h2>
                    <img src='src\assets\Icons\views.svg'></img>
                    <span className='video__views'>{videoDetails.views}</span>
                </article>
                <article className='video__stats--bottom'>
                    <span className='video__date'>{date.toLocaleDateString()}</span>
                    <img src='src\assets\Icons\likes.svg'></img>
                    <span className='video__likes'>{videoDetails.likes}</span>
                </article>
            </section>
            <p className='video__description'>{videoDetails.description}</p>
        </section>
    )
}
export default VideoDetails
