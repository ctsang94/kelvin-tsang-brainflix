import './VideoList.scss'
import { Link } from 'react-router-dom'

const VideoList = ({activeVideo, videoList}) => {

    return (
        <section className='video__list'>
            <h2 className='video__next'>NEXT VIDEOS</h2>
            {videoList
            .filter(video => video.id !== activeVideo.id)
            .map(video =>
                <Link to={`/videos/${video.id}`}>
                    <section key={video.id} className='video__container'>
                        <article className='video__individual'>
                            <img className='video__img' src={video.image} alt='video-image'/>
                            <div className='video__detail'>
                                <h3 className='video__detail--title'>{video.title}</h3>
                                <h4 className='video__detail--channel'>{video.channel}</h4>
                            </div>
                        </article>
                    </section>
                </Link>
            )}
        </section>
    )
}

export default VideoList
