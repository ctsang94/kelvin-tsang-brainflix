import "./Comments.scss";
import UserImage from "../../assets/Images/Mohan-muruge.jpg";
import userIcon from '../../assets/Icons/add_comment.svg';

const Comments = ({ activeVideo }) => {

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString();
  };

  return (
    <>
      <section className="comments">
        <h2 className="comments__count">
          {activeVideo.comments.length} Comments
        </h2>
        <h2 className="comments__title">JOIN THE CONVERSATION</h2>
        <article className="comments__submission">
          <div className="comments__submission--left">
            <img
              className="comments__img"
              src={UserImage}
              alt="avatar-image"
            ></img>
          </div>
          <div className="comments__submission--right">
            <div className='comments__group'>
              {/* <h2 className="comments__title">JOIN THE CONVERSATION</h2> */}
              <input
                className="comments__input"
                placeholder="Add a new comment"
              ></input>
            </div>
            <a className="comments__btn">
              <button className="comments__btn">
                <img className='comments__btn--icon' src={userIcon} alt='add-comment-icon'/>
                <span className='comments__btn--text'>COMMENT</span>
              </button>
            </a>
          </div>
        </article>

        <article className="comments__container">

          {activeVideo.comments.map((comment) =>
          <>
            <section className='comments__container--individual'>
              <article className="comments__container--left">
                <img
                  className="comments__img"
                  src={UserImage}
                  alt="avatar-image">
                </img>
              </article>

              <article className="comments__container--right">
                <div className="comments__card--top">
                  <h2 className="comments__username">{comment.name}</h2>
                  <span className="comments__date">{formatDate(comment.timestamp)}</span>
                </div>
                <p className="comments__card--bottom comments__description">{
                  comment.comment}
                </p>
              </article>
            </section>
          </>
          )}

        </article>
      </section>
    </>
  );
};

export default Comments;
