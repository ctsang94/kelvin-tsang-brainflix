import './VideoList.scss'

const VideoList = ({activeVideo, setActiveVideo, videoData}) => {
    // const clickHandler = (video) => {
    //     setActiveVideo(video)
    // }

    return (
        <section className='video__list'>
            <h2 className='video__next'>NEXT VIDEOS</h2>
            {videoData.map(video =>
            <section onClick={()=> setActiveVideo(video)} className='video__container'>
                <article className='video__individual'>
                    <img className='video__img' src={video.image} />
                    <div className='video__details'>
                    {/* <div onClick={()=> clickHandler(video)} className='video__details'> */}
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
