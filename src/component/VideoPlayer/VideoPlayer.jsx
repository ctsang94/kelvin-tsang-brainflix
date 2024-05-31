import './VideoPlayer.scss'
import Video from '../../Data/video-details.json'

const VideoPlayer = ({activeVideo}) => {
    return (
        <>
        <video className='video' controls poster={activeVideo.image}>
            <source src={`${activeVideo.video}?api_key=kelvin`}></source>
        </video>

        <h1 className='video__title'>{activeVideo.title}</h1>
        
        <article className='video__stats'>
            <h2 className='video__author'>{activeVideo.channel}</h2>
            <span className='video__views'>{activeVideo.views}</span>
            <span className='video__date'>{activeVideo.timestamp}</span>
            <span className='video__likes'>{activeVideo.likes}</span>
        </article>
        <p className='video__description'>{activeVideo.description}</p>
        </>
    )
}

export default VideoPlayer

//80a98f3e-0d97-4fbd-9e61-23899b73cacb