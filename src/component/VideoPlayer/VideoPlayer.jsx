import './VideoPlayer.scss'
import movies from '../../Data/video-details.json'

const VideoPlayer = () => {
    return (
        <>
        <video className='video' controls>
            <source src="https://unit-3-project-api-0a5620414506.herokuapp.com/stream?api_key=80a98f3e-0d97-4fbd-9e61-23899b73cacb"></source>
        </video>

        <h1>The Future of AI</h1>
        
        <div>
            <span>By Aiden Thompson</span>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <p>Explore the cutting-edge developments and predictions for Artificial Intelligence in the coming years. From revolutionary breakthroughs in machine learning to the ethical considerations influencing AI advancements, this exploration transcends the boundaries of mere speculation. Join us on a journey that navigates the intricate interplay between innovation, ethics, and the ever-evolving tech frontier.</p>
        </>
    )
}

export default VideoPlayer

//80a98f3e-0d97-4fbd-9e61-23899b73cacb