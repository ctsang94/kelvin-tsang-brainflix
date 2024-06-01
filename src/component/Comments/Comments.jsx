import "./Comments.scss";
import UserImage from "../../assets/Images/Mohan-muruge.jpg";
import userIcon from '../../assets/Icons/add_comment.svg';
import Video from "../../Data/video-details.json";

const Comments = ({ activeVideo }) => {

  return (
    <>
      <section className="comments">
        <h2 className="comments__count">
          {activeVideo.comments.length} Comments
        </h2>
        <article className="comments__submission">
          <div className="comments__submission--left">
            <img
              className="comments__img"
              src={UserImage}
              alt="User avatar"
            ></img>
          </div>
          <div className="comments__submission--right">
            <h2 className="comments__title">JOIN THE CONVERSATION</h2>
            <input
              className="comments__input"
              placeholder="Add a new comment"
            ></input>
            <button className="comments__btn"><img className='comments__btn--icon' src={userIcon}></img>COMMENT</button>
          </div>
        </article>

        <article className="comments__container">

          {activeVideo.comments.map((comment) =>
          <>
            <section className='comments__container--individual'>
              <div className="comments__container--left">
                <img
                  className="comments__img"
                  src={UserImage}
                  alt="User avatar">
                </img>
              </div>

              <div className="comments__container--right">
                <div className="comments__card--top">
                  <h2 className="comments__username">{comment.name}</h2>
                  <span className="comments__date">{comment.timestamp}</span>
                </div>
                <p className="comments__card--bottom comments__description">{
                  comment.comment}
                </p>
              </div>
            </section>
          </>
          )}

        </article>
      </section>
    </>
  );
};

export default Comments;
