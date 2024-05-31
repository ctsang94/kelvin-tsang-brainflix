import './VideoPlayer.scss'
import Video from '../../Data/video-details.json'

const VideoPlayer = ({sharedState}) => {
    return (
        <>
        <video className='video' controls>
            <source src="https://unit-3-project-api-0a5620414506.herokuapp.com/stream?api_key=80a98f3e-0d97-4fbd-9e61-23899b73cacb"></source>
        </video>

        <h1 className='video__title'>The Future of AI</h1>
        
        <article className='video__stats'>
            <h2 className='video__author'>By Aiden Thompson</h2>
            <span className='video__views'>980,000</span>
            <span className='video__date'>8/8/2023</span>
            <span className='video__likes'>22,479</span>
        </article>
        <p className='video__description'>Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.</p>
        </>
    )
}

export default VideoPlayer

//80a98f3e-0d97-4fbd-9e61-23899b73cacb