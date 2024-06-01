import './VideoPlayer.scss'
import Video from '../../Data/video-details.json'

const VideoPlayer = ({activeVideo}) => {
    return (
        
        <>
        <video className='videoplayer' controls poster={activeVideo.image}>
            <source src={`${activeVideo.video}?api_key=kelvin`}></source>
        </video>

        <section className='video'>
            <h1 className='video__title'>{activeVideo.title}</h1>
            <section className='video__stats'>
                <article className='video__stats--top'>
                    <h2 className='video__author'>{activeVideo.channel}</h2>
                    <span className='video__views'>{activeVideo.views}</span>
                </article>
                <article className='video__stats--bottom'>
                    <span className='video__date'>{activeVideo.timestamp}</span>
                    <span className='video__likes'>{activeVideo.likes}</span>
                </article>
            </section>
            <p className='video__description'>{activeVideo.description}</p>
        </section>
        </>
    )
}

export default VideoPlayer

//80a98f3e-0d97-4fbd-9e61-23899b73cacb