import './Comments.scss'
import UserImage from "../../assets/Images/Mohan-muruge.jpg";
import Video from '../../Data/video-details.json'

const Comments = ({activeVideo}) => {
    return (
        <>
            <section className='comment__submission'>
                <h2 className='comment__count'> 3 Comments</h2>
                <h2 className='comment__title'>JOIN THE CONVERSATION</h2>
                <img className='comment__img' src={UserImage}></img>
                <input className='comment__input' placeholder="Add a new comment"></input>
                <button className='comment__btn'>COMMENT</button>
            </section>

            <section className='comment__containerFeed'>
                <img className='comment__img' src={UserImage}></img>
                <div className='comment__card'>
                    <div className='comment__card--top'>
                        <h2 className='comment__username'>{Video[0].comments[0].name}</h2>
                        <span className='comment__date'>8/11/2023</span>
                    </div>
                    <p className='comment__card--bottom comment__description'>Your insights into the future of AI are enlightening! The intersection of technology and ethics is particularly thought-provoking. Keep us updated on the tech front!</p>
                </div>
            </section>
        </>
    )
}

export default Comments