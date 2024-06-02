import './VideoPlayer.scss'

const VideoPlayer = ({activeVideo}) => {

    const date = new Date(activeVideo.timestamp)

    return (

        <>
        <video className='videoplayer' controls poster={activeVideo.image}>
            <source src={`${activeVideo.video}?api_key=kelvin`}></source>
        </video>
        </>
    )
}

export default VideoPlayer
