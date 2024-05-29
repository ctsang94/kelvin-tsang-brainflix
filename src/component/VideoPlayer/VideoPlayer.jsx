import './VideoPlayer.scss'

const VideoPlayer = () => {
    return (
        <video className='video' controls>
            <source src="https://unit-3-project-api-0a5620414506.herokuapp.com/stream?api_key=80a98f3e-0d97-4fbd-9e61-23899b73cacb"></source>
        </video>
    )
}

export default VideoPlayer

//80a98f3e-0d97-4fbd-9e61-23899b73cacb