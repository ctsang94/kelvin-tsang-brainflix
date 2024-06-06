import './UploadForm.scss';
import image from '../../assets/Images/Upload-video-preview.jpg'
import iconImage from '../../assets/Icons/publish.svg'

const UploadForm = () => {
    return (
        <>  
            <div className='upload__container'>
                <h1 className='upload__title'>Upload Video</h1>
                <h2 className='upload__thumbnail--title'>VIDEO THUMBNAIL</h2>
                <img className='upload__img' src={image}></img>
                <form>
                    <div className='form__top'>
                        <label className='form__top--title'>TITLE YOUR VIDEO</label>
                        <input className='form__top--input' placeholder="Add a title to your video"></input>
                    </div>  
                    <div className='form__mid'>  
                        <label className='form__mid--description'>ADD A VIDEO DESCRIPTION</label>
                        <input className='form__mid--input' placeholder="Add a description to your video"></input>
                    </div>
                    <div className='form__bot'>
                        <button className='form__bot--publish'><img className='form__bot--icon' src={iconImage}></img>PUBLISH</button>
                        <button className='form__bot--cancel'>CANCEL</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UploadForm;